import styled from "@emotion/styled";

export const BlogPostPreviewLink = styled.a`
  color: #aaaaaa;
  width: 100%;
  max-width: 600px;
  cursor: pointer;

  border-right: 5px solid white;

  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }

  & h2 {
    font-size: 24px;
    margin-bottom: 4px;

    & span {
      font-size: 18px;

      display: block;
      margin-bottom: 4px;
    }
  }

  & small {
    font-size: 14px;
    font-weight: 500;
  }
`;
