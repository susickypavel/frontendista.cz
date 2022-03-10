import * as React from "react";
import YouTube from "react-youtube";
import LazyLoad from "react-lazyload";

const YoutubeEmbed: React.FunctionComponent<{ videoId: string }> = ({ videoId }) => {
  return (
    <LazyLoad once placeholder={<div className="TODO" />}>
      <YouTube className="TODO" containerClassName="TODO" videoId={videoId} />
    </LazyLoad>
  );
};

export default YoutubeEmbed;
