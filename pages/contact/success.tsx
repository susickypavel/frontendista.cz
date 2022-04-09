import * as React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { HiCheckCircle } from "react-icons/hi";

import styles from "@stylesheets/pages/contact/success-page.module.scss";

import type { NextPage } from "next";
import { AnchorLink } from "@components/common/link";

const ContactSuccessPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>
        Your message has been sent.
        <HiCheckCircle aria-hidden="true" />
      </h1>
      <div className={styles.recapitulation}>
        {Object.entries(query)
          .filter(([, value]) => value)
          .map(([key, value]) => (
            <div key={key}>
              <span>{key}</span>
              <p>{value}</p>
            </div>
          ))}
      </div>
      <div className="flex gap-4 w-full">
        <AnchorLink
          href="/contact"
          classNames={{
            base: styles.link,
          }}>
          Send another
        </AnchorLink>
        <AnchorLink
          href="/"
          classNames={{
            base: clsx(styles.link, styles.linkCta),
          }}>
          Go home
        </AnchorLink>
      </div>
    </main>
  );
};

export default ContactSuccessPage;
