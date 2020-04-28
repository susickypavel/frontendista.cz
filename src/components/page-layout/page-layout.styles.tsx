import React from "react";

export const GlobalStyles = () => (
  <style jsx global>
    {`
      * {
        box-sizing: border-box;
      }

      :root {
        font-size: 62.5%;
      }

      body {
        font-family: "Oxanium";
        background-color: black;
      }

      html {
        min-height: 100%;
        overflow: auto;
      }

      body,
      #__next {
        min-height: 100%;
      }

      ::-webkit-scrollbar {
        width: 25px;
        height: 25px;
      }

      ::-webkit-scrollbar-track {
        background: black;
      }

      ::-webkit-scrollbar-thumb:vertical {
        background: #aaaaaa;
        border: 10px solid black;
        border-top: none;
        border-bottom: none;
      }

      ::-webkit-scrollbar-thumb:horizontal {
        background: #aaaaaa;
        border: 10px solid black;
        border-left: none;
        border-right: none;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: white;
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
