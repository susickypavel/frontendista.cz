import React, { Fragment } from "react";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

import type { FC } from "react";
import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "src/styles/global.styles.css";

const ThemeToggle = dynamic<unknown>(
  () => import("src/components/theme/theme-toggle/theme-toggle.component").then(module => module.ThemeToggle),
  { ssr: false },
);

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  return (
    <Fragment>
      <ThemeToggle />
      <DefaultSeo
        canonical={"https://pavelsusicky.com" + asPath}
        openGraph={{
          url: "https://pavelsusicky.com" + asPath,
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@thesoreon",
        }}
        additionalMetaTags={[
          {
            property: "author",
            content: "Pavel Susicky",
          },
        ]}
      />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
