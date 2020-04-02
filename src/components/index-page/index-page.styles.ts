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

export const ContentBox = styled.div`
  min-height: 100vh;
`;

export const LandingBlockLeft = styled.div`
  min-height: 100vh;
  flex: 1 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LandingBlockRight = styled.div`
  min-height: 100vh;
  flex: 1 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  box-sizing: border-box;

  @media (max-width: 550px) {
    align-self: flex-start;
  }
`;
