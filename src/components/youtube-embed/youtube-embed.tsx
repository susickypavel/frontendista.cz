import * as React from "react";
import YouTube from "react-youtube";
import LazyLoad from "react-lazyload";

import styles from "./youtube-embed.module.scss";

import type { IYoutubeEmbedProps } from "./youtube-embed.d";

export const YoutubeEmbed: React.FC<IYoutubeEmbedProps> = ({ videoId }) => {
  return (
    <LazyLoad classNamePrefix={styles.placeholder} once>
      <YouTube
        className={styles.iframe}
        containerClassName={styles.placeholder}
        videoId={videoId}
      />
    </LazyLoad>
  );
};
