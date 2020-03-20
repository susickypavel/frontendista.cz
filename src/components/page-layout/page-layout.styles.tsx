import React from "react";

export const GlobalStyles = () => (
  <style jsx global>
    {`
      :root {
        font-size: 62.5%;
      }

      body {
        font-family: "Oxanium";
        min-width: 650px;
      }

      ::-webkit-scrollbar {
        width: 2px;
      }

      ::-webkit-scrollbar-track {
        background: linear-gradient(0deg, rgba(255, 0, 0, 1) 0%, rgba(7, 0, 211, 1) 100%);
      }

      ::-webkit-scrollbar-thumb {
        background: lime;
      }

      ::-webkit-scrollbar-thumb {
        background: transparent;
        box-shadow: 0px 0px 0px 100000vh black;
      }
    `}
  </style>
);

export const CSSReset = () => (
  <style jsx global>
    {`
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
    `}
  </style>
);
