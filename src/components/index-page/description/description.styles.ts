import styled from "@emotion/styled";

export const DescriptionHolder = styled.div`
  display: inline-block;
  max-width: 600px;
  width: 100%;
`;

export const TextDescriptionSVG = styled.svg`
  padding: 0 1.6em;
  box-sizing: border-box;

  width: 100%;
  height: auto;
`;

export const SocialIconsHolder = styled.div`
  display: flex;

  margin: 2.4em 0;

  & svg:last-of-type {
    padding: 1.6em;

    @media (max-width: 550px) {
      width: 2rem;
    }
  }
`;
