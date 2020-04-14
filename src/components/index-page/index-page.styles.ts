import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface Props {
  position: {
    [key: string]: number;
  };
}

export const DotsHolder = styled.div`
  grid-area: logo;
  position: relative;
`;

export const Dot = styled.div<Props>(props => ({
  background: "#aaaaaa",
  position: "absolute",
  width: "9px",
  height: "9px",
  borderRadius: "100%",
  boxShadow: "0px 0px 0px 15px rgba(0, 0, 0, 1)",
  ...props.position,
}));

export const PageHolder = styled.div`
  background: black;
  height: 100%;
`;

export const HorizontalGridLine = styled(motion.div)`
  grid-column: 1 / 4;
  grid-row: 2;
  border-top: 1px solid #aaaaaa;
  border-bottom: 1px solid #aaaaaa;
`;
export const VerticalGridLine = styled(motion.div)`
  grid-column: 2;
  grid-row: 1 / 4;
  border-left: 1px solid #aaaaaa;
  border-right: 1px solid #aaaaaa;
`;

export const GridContainer = styled.div`
  background: black;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 50% 1fr;
  grid-template-rows: 1fr 75% 1fr;
  grid-template-areas: "city . ." ". logo ." ". name .";

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 75% 1fr;
    grid-template-areas: ". city ." ". logo ." ". name .";
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-areas: "city" "logo" "name";

    ${VerticalGridLine} {
      display: none;
    }

    ${DotsHolder} {
      display: none;
    }
  }
`;
