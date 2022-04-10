import * as React from "react";
import YouTube from "react-youtube";
import LazyLoad from "react-lazyload";

export const YoutubeEmbed: React.FunctionComponent<{ videoId: string }> = ({
  videoId,
}) => {
  return (
    <LazyLoad once placeholder={<div className="TODO: Placeholder" />}>
      <YouTube
        className="TODO: Iframe"
        containerClassName="TODO: Container"
        videoId={videoId}
      />
    </LazyLoad>
  );
};
