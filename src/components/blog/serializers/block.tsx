import React from "react";

import BlockContent from "@sanity/block-content-to-react";

import Paragraph from "./Paragraph";
import Header from "./Header";

interface Props {
  node: {
    style: string;
  };
}

const block: React.FC<Props> = props => {
  const { style } = props.node;

  if (/^h\d/.test(style)) {
    return <Header level={style as any}>{props.children}</Header>;
  }

  if (style === "normal") {
    return <Paragraph>{props.children}</Paragraph>;
  }

  return BlockContent.defaultSerializers.types.block(props);
};

export default block;
