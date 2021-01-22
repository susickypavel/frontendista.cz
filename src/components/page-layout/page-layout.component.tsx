import React, { Fragment } from "react";

import { NextSeo } from "next-seo";

export type PageLayoutProps = WritableNextSeoProps;

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

export const SEO_DEFAULTS = {
  title: "Pavel Susicky",
  description: "Pavel Susicky is a software engineer from Czech republic",
  image: {
    url: "https://pavelsusicky.com/temp.jpg",
    alt: "Screenshot of pavelsusicky.com main page",
  },
};

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  image = SEO_DEFAULTS.image,
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
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
