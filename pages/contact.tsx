import * as React from "react";
import { useForm } from "react-hook-form";
import { nopeResolver } from "@hookform/resolvers/nope";
import Nope from "nope-validator";
import { SiDiscord } from "react-icons/si";

import styles from "@stylesheets/pages/contact-page.module.scss";

import { Input } from "@components/common/input";
import { Button } from "@components/common/button";
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
    console.log(data);
  };

  return (
    <main className={styles.main}>
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
