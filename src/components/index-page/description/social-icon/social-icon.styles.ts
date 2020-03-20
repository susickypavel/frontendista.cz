import styled from "@emotion/styled";

export const SocialIconHolder = styled.a`
  display: inline-block;
  padding: 1.2em;
  position: relative;
  margin-right: auto;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const BorderSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;
