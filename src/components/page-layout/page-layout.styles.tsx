import { css } from "@emotion/core";

export const fontFaces = css`
  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/Oxanium-Bold.woff2") format("woff2"),
      url("/fonts/Oxanium-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/Oxanium-Medium.woff2") format("woff2"),
      url("/fonts/Oxanium-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Oxanium";
    src: url("/fonts/Oxanium-Regular.woff2") format("woff2"),
      url("/fonts/Oxanium-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export const globalStyles = css`
  :root {
    font-size: 62.5%;
  }

  html,
  body {
    min-height: 100vh;
  }

  body {
    background: #202020;
    color: white;
    font-family: "Oxanium";
  }

  body::after {
    content: " ";
    width: 100%;
    height: 100%;
    background: url(/noise.gif);
    opacity: 0.05;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
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
