import React from "react";
import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
  pathname: string;
  metaData?: MetaData;
  image?: {
    path: string;
    alt: string;
  };
}

interface MetaData {
  twitter: Partial<{
    cardType: "summary" | "summary_large_image" | "app" | "player";
  }>;
  openGraph: Partial<{
    type: "website" | "article";
  }>;
}

const Seo: React.FC<Props> = ({
  title = "Pavel Susicky Portfolio",
  description = "Portfolio and Blog of a Frontend developer Pavel Susicky from Czech republic",
  keywords = ["Frontend Developer", "React Developer", "Software engineer"],
  metaData: { twitter: { cardType }, openGraph: { type } } = {
    twitter: { cardType: "summary_large_image" },
    openGraph: { type: "website" },
  },
  pathname,
  image = {
    path: "/thumbnail.jpg",
    alt: "Thumbnail photo for portfolio and blog of Pavel Susicky",
  },
}) => {
  const composedKeywords = keywords.join(",");

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={composedKeywords} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`http://pavelsusicky-com.now.sh${pathname}`} />
      <meta property="og:image" content={`http://pavelsusicky-com.now.sh${image.path}`} />
      {/* Twitter metadata */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:card" content={cardType} />
      <meta property="twitter:creator" content="@thesoreon" />
      <meta
        property="twitter:image"
        content={`http://pavelsusicky-com.now.sh${image.path}`}
      />
      <meta property="twitter:image:alt" content={image.alt} />
    </Head>
  );
};

export default Seo;
