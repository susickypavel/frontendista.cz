import * as React from "react";
import YouTube from "react-youtube";
import LazyLoad from "react-lazyload";

import styles from "./youtube-embed.module.scss";

const YoutubeEmbed: React.FunctionComponent<{ videoId: string }> = ({ videoId }) => {
  return (
    <LazyLoad once placeholder={<div className={styles.placeholder} />}>
      <YouTube
        className={styles.embed}
        containerClassName={styles.container}
        videoId={videoId}
      />
    </LazyLoad>
  );
};

export default YoutubeEmbed;
