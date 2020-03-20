import styled from "@emotion/styled";

export const PageHolder = styled.div`
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(155, 0, 232, 1) 100%); */
  background: black;
`;

export const LandingBlock = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    align-items: flex-start;
  }
`;

export const ContentBox = styled.div`
  min-height: 100vh;
`;
