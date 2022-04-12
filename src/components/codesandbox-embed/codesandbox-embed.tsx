import * as React from "react";
import LazyLoad from "react-lazyload";

import styles from "../youtube-embed/youtube-embed.module.scss";

import type { ICodeSandboxEmbedProps } from "./codesandbox-embed.d";

export const CodeSandboxEmbed: React.FC<ICodeSandboxEmbedProps> = ({
  sandboxId,
  title,
}) => {
  return (
    <LazyLoad once>
      <div className={styles.placeholder}>
        <iframe
          className={styles.iframe}
          src={`https://codesandbox.io/embed/${sandboxId}?codemirror=1&fontsize=13&hidenavigation=1&theme=dark&runonclick=1`}
          title={title}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          // NOTE: This is generally bad for accessibility. However, the sandbox steals focus and never returns it so it's necessary
          tabIndex={-1}
        />
      </div>
    </LazyLoad>
  );
};
