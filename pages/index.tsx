import React from "react";

import type { NextPage } from "next";

import { PageLayout } from "src/components/page-layout/page-layout.component";

import { LinkButton } from "src/components/common/components/link-button/link-button.component";

import EmailAlerted from "src/assets/icons/email-alerted.svg";
import LinkedIn from "src/assets/icons/linkedin.svg";
import Twitter from "src/assets/icons/twitter.svg";
import GitHub from "src/assets/icons/github.svg";
import Discord from "src/assets/icons/discord.svg";

const IndexPage: NextPage = () => {
  return (
    <PageLayout
      title="home"
      wrapper={{
        element: "main",
        classes: "p-4",
      }}
    >
      <LinkButton
        href="TODO"
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
        icon={{
          component: Twitter,
        }}
      >
        Twitter
      </LinkButton>
      <LinkButton
        href="https://www.linkedin.com/in/pavel-susicky/"
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
