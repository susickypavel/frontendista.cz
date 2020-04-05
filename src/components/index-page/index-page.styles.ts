import styled from "@emotion/styled";

export const PageHolder = styled.div`
  background: black;
  height: 100%;
`;

export const LandingBlock = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
