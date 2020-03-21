import styled from "@emotion/styled";

export const PageHolder = styled.div`
  background: black;
`;

export const LandingBlock = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  min-height: 100vh;
`;

export const LandingBlockLeft = styled.div`
  height: 100vh;
  flex: 1 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LandingBlockRight = styled.div`
  height: 100vh;
  flex: 1 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    align-self: flex-start;
  }
`;
