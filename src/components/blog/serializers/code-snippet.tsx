import React from "react";
import { css } from "@emotion/core";

import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface Props {
  node: {
    code: string;
    language: string;
  };
}

const CodeSnippet: React.FC<Props> = ({ node: { language, code } }) => {
  return (
    <div css={codeSnippetHolder}>
      <ReactSyntaxHighlighter
        language={language}
        style={darcula}
        customStyle={{
          padding: "32px",
          lineHeight: 1.5,
        }}
        showLineNumbers
      >
        {code}
      </ReactSyntaxHighlighter>
    </div>
  );
};

const codeSnippetHolder = css({
  width: "100%",
  fontSize: "20px",
  marginBottom: "24px",
  border: "1px solid #aaaaaa",
});

export default CodeSnippet;
