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

export const HorizontalGridLine = styled.div`
  grid-column: 1 / 4;
  grid-row: 2;
  border-top: 1px solid #aaaaaa;
  border-bottom: 1px solid #aaaaaa;
`;
export const VerticalGridLine = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  border-left: 1px solid #aaaaaa;
  border-right: 1px solid #aaaaaa;
`;

export const GridContainer = styled.div`
  background: black;
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 75% 1fr;
  grid-template-areas: ". . ." ". logo ." ". . .";

  @media (max-width: 768px) {
    grid-template-columns: 1fr 75% 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-areas: "." "logo" ".";

    ${VerticalGridLine} {
      display: none;
    }
  }
`;
