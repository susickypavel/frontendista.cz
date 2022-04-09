import * as React from "react";

import styles from "@stylesheets/pages/contact-page.module.scss";

import { AnchorLink } from "@components/common/link";
import { ContactForm } from "src/modules/contact-form/contact-form";

import type { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.sideContent}>
        <h1>Good old contact form</h1>
        <div className={styles.subHeading}>Leave a message or love/hate letter!</div>
        <p>
          This form sends a message to my Discord Server, where I almost immediately see
          it. Say goodbye to email and embrace zoomer generation alternatives.
        </p>
        <p>
          You are probably asking: &ldquo;Why would you implement something like
          this?&rdquo; It was fun to implement something like that, and it&apos;s better
          than a blank page, right?
        </p>
        <p>
          If you incline to more casual forms of communication, you can send me a
          mail&nbsp;
          <AnchorLink
            classNames={{
              base: styles.mailLink,
            }}
            href="mailto:susicky.pavel@outlook.cz">
            here
          </AnchorLink>{" "}
          or follow me on socials below.
        </p>
      </div>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
