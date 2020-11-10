import { css } from "@emotion/core";

export const heading = css`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: inline-block;
  font-size: 12.8rem;
  margin-bottom: 3.2rem;
  margin-top: 0;
`;

export const sub_heading = css`
  font-size: 3.6rem;
  margin: 0;
`;

export const quick_links_list = css`
  font-size: 2.4rem;
  list-style-type: none;
  margin-top: 6.4rem;
  padding: 0;

  li {
    margin-bottom: 1rem;

    a {
      color: #000;
      font-weight: bold;
    }
  }
`;
