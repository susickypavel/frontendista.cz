import styled from "@emotion/styled";

import CardSVG from "../../../../assets/card.svg";

export const BlogPostPreviewHolder = styled.div`
  position: relative;
`;

export const StyledCardSVG = styled(CardSVG)`
  width: 100%;
  height: auto;
`;

export const BlogPostPreviewContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  height: 100%;
  width: 100%;
  padding: 10%;
  box-sizing: border-box;
`;

export const BlogPostPreviewHeader = styled.h2`
  color: white;
  font-size: 3rem;
`;
