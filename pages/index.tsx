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
      {blogFeed.map(preview => {
        const { _id } = preview;

        return <BlogFeedPreview key={_id} preview={preview} />;
      })}
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogFeedQuery = `*[_type == "gallery" || _type == "post"] {
      _id,
      _type,
      title,
      photos
    }`;

  try {
    const blogFeed = await sanityClient.fetch<BlogFeed[]>(blogFeedQuery);
    const imageUrlBuilder = ImageUrlBuilder(sanityClient);

    if (blogFeed.length == 0) throw "Error in fetching data from Sanity CMS";

    blogFeed.forEach(feed => {
      if (feed._type == "gallery") {
        feed.photos.forEach(photo => {
          const url = imageUrlBuilder.image(photo.asset._ref).url();

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
