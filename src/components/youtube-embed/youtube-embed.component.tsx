import * as React from "react";
import YouTube from "react-youtube";

const YoutubeEmbed: React.FunctionComponent<{ videoId: string }> = ({ videoId }) => {
  return <YouTube videoId={videoId} />;
};

export default YoutubeEmbed;
