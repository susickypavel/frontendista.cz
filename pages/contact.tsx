import * as React from "react";
import { useForm } from "react-hook-form";
import { nopeResolver } from "@hookform/resolvers/nope";
import Nope from "nope-validator";
import { SiDiscord } from "react-icons/si";

import styles from "@stylesheets/pages/contact-page.module.scss";

import { Input } from "@components/common/input";
import { Button } from "@components/common/button";
import { AnchorLink } from "@components/common/link";
import { TextArea } from "@components/common/textarea";

import type { NextPage } from "next";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const schema = Nope.object().shape({
  name: Nope.string().min(1, "Name is too short").max(50, "Name is too long"),
  email: Nope.string().max(100, "Email too long").email("Invalid email"),
  message: Nope.string()
    .min(1, "Message is too short")
    .max(999, "Message is too long")
    .required("Message is required"),
});

const ContactPage: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: nopeResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    fetch("/api/discord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

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
      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="YOUR NAME"
          placeholder="Optional, but don’t mind me when I call you PinkLord39!"
          errors={formState.errors.name}
          {...register("name", {
            required: true,
          })}
        />
        <Input
          label="YOUR EMAIL"
          placeholder="Optional, fill if you want me to contact you 😉"
          errors={formState.errors.email}
          {...register("email", {
            required: true,
          })}
        />
        <TextArea
          label="YOUR MESSAGE"
          placeholder="Love you, Pavel."
          domProps={{
            required: true,
            maxLength: 999,
          }}
          errors={formState.errors.message}
          {...register("message")}
        />
        <Button
          classNames={{
            base: styles.submitButton,
            isHovered: styles.submitButtonHovered,
            isFocused: styles.submitButtonFocused,
          }}
          icons={{
            right: SiDiscord,
          }}
          type="submit">
          SEND TO MY DISCORD
        </Button>
      </form>
    </main>
  );
};

export default ContactPage;
