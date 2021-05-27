import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

import { LinkButton } from "src/components/common/components/link-button/link-button.component";

import EmailAlerted from "src/assets/icons/email-alerted.svg";
import LinkedIn from "src/assets/icons/linkedin.svg";
import Twitter from "src/assets/icons/twitter.svg";
import GitHub from "src/assets/icons/github.svg";
import Discord from "src/assets/icons/discord.svg";
import { Header } from "src/components/common/components/header/header.component";

const IndexPage: NextPage = () => {
  return (
    <PageLayout
      title="home"
      wrapper={{
        element: "main",
        classes: "p-4",
      }}
    >
      <Header level="h1">Hello, World!</Header>
      <Header level="h2">Hello, World!</Header>
      <Header level="h3">Hello, World!</Header>
      <Header level="h4">Hello, World!</Header>
      <Header level="h5">Hello, World!</Header>
      <Header level="h6">Hello, World!</Header>

      <LinkButton
        href="TODO"
        variant="primary"
        icon={{
          component: Discord,
          props: {
            fill: "#ffffff",
          },
        }}
      >
        Discord
      </LinkButton>
      <LinkButton
        href="https://github.com/Thesoreon"
        variant="primary"
        icon={{
          component: GitHub,
          props: {
            fill: "#ffffff",
          },
        }}
      >
        GitHub
      </LinkButton>
      <LinkButton
        href="https://twitter.com/thesoreon"
        variant="primary"
        icon={{
          component: Twitter,
        }}
      >
        Twitter
      </LinkButton>
      <LinkButton
        href="https://www.linkedin.com/in/pavel-susicky/"
        variant="primary"
        icon={{
          component: LinkedIn,
        }}
      >
        LinkedIn
      </LinkButton>
      <LinkButton
        href="mailto:susicky.pavel@outlook.cz"
        icon={{
          component: EmailAlerted,
          props: { fill: "#F9FAFB" },
        }}
      >
        Email me
      </LinkButton>
    </PageLayout>
  );
};

export default IndexPage;
