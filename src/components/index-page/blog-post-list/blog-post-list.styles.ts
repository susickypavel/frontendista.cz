import styled from "@emotion/styled";

export const BlogPostListHolder = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 16px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
