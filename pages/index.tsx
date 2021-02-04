import React from "react";
import ImageUrlBuilder from "@sanity/image-url";

import type { GetStaticProps, NextPage } from "next";
import type { BlogFeed } from "src/components/blogfeed-preview/blogfeed-preview";

import { PageLayout } from "src/components/page-layout/page-layout.component";
import { sanityClient } from "src/utils/data-fetching/sanity-client";
import { BlogFeedPreview } from "src/components/blogfeed-preview/blogfeed-preview.component";

interface IndexProps {
  blogFeed: BlogFeed[];
}

const Index: NextPage<IndexProps> = ({ blogFeed }) => {
  return (
    <PageLayout>
      <main className="max-w-main mx-auto px-4 box-content">
        <h1 className="text-center text-5xl py-8 underline">blog</h1>
        {blogFeed.map(preview => {
          const { _id } = preview;

          return <BlogFeedPreview preview={preview} key={_id} />;
        })}
      </main>
      <footer className="max-w-main mx-auto mt-6 flex">
        <span>
          <strong>PAVEL SUSICKY</strong> &copy; 2021
        </span>
        <span className="flex-grow text-right">Coded with Next.js & Vercel, Sanity.io</span>
      </footer>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogFeedQuery = `*[_type == "gallery" || _type == "post"] {
    _id,
    _type,
    title,
    publishedAt,
    "categories": categories[]->title,
    "slug": slug.current,
    photos[] {
      asset-> {
        _id,
      }
    }
  } | order(publishedAt desc)`;

  try {
    const blogFeed = await sanityClient.fetch<BlogFeed[]>(blogFeedQuery);
    const imageUrlBuilder = ImageUrlBuilder(sanityClient);

    if (blogFeed.length == 0) throw "Error in fetching data from Sanity CMS";

    blogFeed.forEach(feed => {
      if (feed._type == "gallery") {
        feed.photos.forEach(photo => {
          const url = imageUrlBuilder.image(photo.asset._id).url();

          if (!url) throw "Error in imageUrlBuilder, url was Null.";

          photo.asset.url = url;
        });
      }
    });

    return {
      props: {
        blogFeed,
      },
    };
  } catch (error) {
    console.error("\x1b[31m", `🟥 ${error}`);

    if (process.env.NODE_ENV != "development") {
      process.exit(1);
    }

    return {
      props: {},
    };
  }
};

export default Index;
