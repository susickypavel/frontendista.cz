import * as React from "react";
import { useForm } from "react-hook-form";
import { nopeResolver } from "@hookform/resolvers/nope";
import { SiDiscord } from "react-icons/si";

import styles from "./contact-form.module.scss";

import { Input } from "@components/common/input";
import { Button } from "@components/common/button";
import { TextArea } from "@components/common/textarea";
import { contactFormSchema } from "@utils/validation/contact-form-validation";

import type { IFormInputs } from "./contact-form.d";

export const ContactForm: React.FunctionComponent = () => {
  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: nopeResolver(contactFormSchema),
  });

  const onSubmit = async (data: IFormInputs) => {
    try {
      const result = await fetch(process.env.NEXT_PUBLIC_DISCORD_CONTACT_WORKER_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(await result.text());
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
};
