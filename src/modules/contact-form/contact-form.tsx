import * as React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { nopeResolver } from "@hookform/resolvers/nope";
import { SiDiscord } from "react-icons/si";
import { HiExclamationCircle } from "react-icons/hi";

import styles from "./contact-form.module.scss";

import { Input } from "@components/common/input";
import { Button } from "@components/common/button2";
import { TextArea } from "@components/common/textarea";
import { contactFormSchema } from "@utils/validation/contact-form-validation";

import type { IFormInputs } from "./contact-form.d";

export const ContactForm: React.FunctionComponent = () => {
  const [formError, setFormError] = React.useState<string>("");
  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: nopeResolver(contactFormSchema),
  });

  const { push } = useRouter();

  const onSubmit = async (data: IFormInputs) => {
    try {
      const result = await fetch(process.env.NEXT_PUBLIC_DISCORD_CONTACT_WORKER_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (result.ok) {
        push({
          pathname: "/contact/success",
          query: data as {},
        });
      } else {
        switch (result.status) {
          case 400:
            setFormError("Blocked by server validation (400)");
            break;
          case 429:
            setFormError("Request limit exceeded (429)");
            break;
          case 500:
            setFormError("Something went wrong (500)");
            break;
          default:
            setFormError("Something went wrong");
            break;
        }
      }
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)} noValidate>
      {formError && (
        <div className={styles.errorAlert}>
          <HiExclamationCircle />
          {formError}
        </div>
      )}
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
        isLoading={formState.isSubmitting}
        isDisabled={!formState.isValid && formState.isSubmitted}
        classNames={{
          override: styles.submitButton,
          isHovered: styles.submitButtonHovered,
          isFocused: styles.submitButtonFocused,
          isPressed: styles.submitButtonPressed,
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
