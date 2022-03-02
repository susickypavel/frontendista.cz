import * as React from "react";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { GET_ALL_POST_SLUG, GET_IMAGES_BY_ID, GET_POST_BY_SLUG } from "@queries/post";
import { GRAPHQL_CLIENT } from "@utils/graphql-client";

import {
  GetAllPostSlug,
  GetImagesById,
  GetImagesByIdVariables,
  GetPostBySlug,
  GetPostBySlugVariables,
  GetPostBySlug_allPost,
} from "@queries/__generated__";
import type { ParsedUrlQuery } from "querystring";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

const YoutubeEmbed = dynamic(
  () => import("@components/youtube-embed/youtube-embed.component"),
);

interface BlogPostPageProps extends InferGetStaticPropsType<typeof getStaticProps> {}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ title, bodyRaw }) => {
  return (
    <div style={{ maxWidth: 640 }}>
      <h1>{title}</h1>
      <PortableText
        value={bodyRaw}
        components={{
          types: {
            youtube: ({ value }) => <YoutubeEmbed videoId={value.videoId} />,
            image: ({ value }) => (
              <Image
                placeholder="blur"
                layout="responsive"
                height={value.height}
                width={value.width}
                src={value.url}
                blurDataURL={value.lqip}
                alt="TODO"
              />
            ),
          },
        }}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { allPost } = await GRAPHQL_CLIENT.request<GetAllPostSlug>(GET_ALL_POST_SLUG);

  // NOTE: This isn't really necessary as slug should never be null because it's required and validated in CMS.
  const slugs = allPost
    .map(post => post.slug?.current)
    .filter((slug): slug is string => !!slug)
    .map(slug => `/blog/${slug}`);

  if (slugs.length !== allPost.length) {
    throw new Error("Some posts don't have a slug.");
  }

  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<GetPostBySlug_allPost, Params> = async ({
  params,
}) => {
  const { allPost } = await GRAPHQL_CLIENT.request<GetPostBySlug, GetPostBySlugVariables>(
    GET_POST_BY_SLUG,
    {
      slug: params!.slug,
    },
  );

  if (allPost.length < 1) {
    throw new Error(`No post with slug '${params!.slug}' found.`);
  } else if (allPost.length > 1) {
    throw new Error(`Multiple posts with the slug '${params!.slug}' found.`);
  }

  const post = allPost[0];

  const imageIds = post.bodyRaw
    .filter((item: any) => item._type === "image")
    .map((item: any) => item.asset._ref);

  const { allSanityImageAsset } = await GRAPHQL_CLIENT.request<
    GetImagesById,
    GetImagesByIdVariables
  >(GET_IMAGES_BY_ID, {
    ids: imageIds,
  });

  const imagesData = allSanityImageAsset.reduce((previous, current) => {
    const { _id, ...props } = current;

    if (!_id) {
      throw new Error(
        `Expected image assets with id, but got: ${JSON.stringify(
          current,
          undefined,
          2,
        )}`,
      );
    }

    previous[_id] = {
      url: props.url,
      lqip: props.metadata?.lqip,
      aspectRatio: props.metadata?.dimensions?.aspectRatio,
      height: props.metadata?.dimensions?.height,
      width: props.metadata?.dimensions?.width,
    };

    return previous;
  }, {} as Record<string, any>);

  post.bodyRaw
    .filter((item: any) => item._type === "image")
    .forEach((item: any) => {
      const data = imagesData[item.asset._ref];

      delete item.asset;

      Object.assign(item, data);
    });

  return {
    props: {
      ...post,
    },
  };
};

export default BlogPostPage;
