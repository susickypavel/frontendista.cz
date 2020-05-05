import { css } from "@emotion/core";

export const fontFaces = css`
  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/oxanium-bold-webfont.woff2") format("woff2"),
      url("/fonts/oxanium-bold-webfont.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/oxanium-medium-webfont.woff2") format("woff2"),
      url("/fonts/oxanium-medium-webfont.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/oxanium-regular-webfont.woff2") format("woff2"),
      url("/fonts/oxanium-regular-webfont.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export const globalStyles = css`
  html,
  body {
    min-height: 100vh;
  }

  body {
    background: black;
    color: white;
    font-family: "Oxanium";
  }

  * {
    box-sizing: border-box;
  }
`;

export const cssReset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
