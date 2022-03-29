import * as React from "react";

import { useLink } from "react-aria";
import { useRouter } from "next/router";
import { useSound } from "use-sound";

import type { AriaLinkOptions } from ".pnpm/@react-aria+link@3.2.3_react@17.0.2/node_modules/@react-aria/link";

export interface AnchorLinkProps extends Omit<AriaLinkOptions, "elementType"> {
  href: string;
}

export const AnchorLink: React.FunctionComponent<AnchorLinkProps> = ({
  href,
  children,
  onPress,
  ...props
}) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const { push } = useRouter();
  const [blob] = useSound("/audio/blob-compressed.mp3");

  const { linkProps, isPressed } = useLink(
    {
      onPress: e => {
        if (onPress) {
          onPress(e);
        }

        blob();
        push(href);
      },
      elementType: "span",
      ...props,
    },
    linkRef,
  );

  return <span {...linkProps}>{children}</span>;
};
