import React from "react";

import BlockContent from "@sanity/block-content-to-react";

import Paragraph from "./paragraph";
import Header from "./Header";

interface Props {
  node: {
    style: string;
  };
  slug: string;
}

const block: React.FC<Props> = props => {
  const {
    node: { style },
    slug,
  } = props;

  if (/^h\d/.test(style)) {
    return (
      <Header level={style as any} slug={slug}>
        {props.children}
      </Header>
    );
  }

  if (style === "normal") {
    return <Paragraph>{props.children}</Paragraph>;
  }

  return BlockContent.defaultSerializers.types.block(props);
};

export default block;
