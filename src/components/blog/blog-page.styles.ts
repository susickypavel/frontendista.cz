import styled from "@emotion/styled";

export const BlogPostPageHolder = styled.div`
  background: black;
  min-height: 100vh;
`;

export const PostContentHolder = styled.div`
  background: #212121;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const PostTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: white;
  padding: 0px 64px 32px 64px;

  @media (max-width: 1024px) {
    padding: 0px 32px 32px 32px;
    font-size: 40px;
  }

  @media (max-width: 425px) {
    padding: 0px 16px 16px 16px;
    font-size: 32px;
  }
`;

export const SubTitle = styled.span`
  font-size: 40px;
  display: block;
  line-height: 48px;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 425px) {
    font-size: 24px;
  }
`;
