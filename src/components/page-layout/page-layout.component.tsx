import React, { Fragment } from "react";

import { NextSeo } from "next-seo";

type PageLayoutProps = WritableNextSeoProps;

interface WritableNextSeoProps {
  title?: string;
  description?: string;
  image?: ImageMeta;
}

interface ImageMeta {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  image = {
    url: "https://pavelsusicky.com/temp.jpg",
    alt: "Screenshot of pavelsusicky.com main page",
  },
  title = "Pavel Susicky",
  description = "Pavel Susicky is a software engineer from Czech republic",
}) => {
  return (
    <Fragment>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [image],
        }}
      />
      {children}
    </Fragment>
  );
};
