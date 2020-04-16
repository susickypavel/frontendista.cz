import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";

import baffle from "baffle";

interface Props {
  gridArea: string;
  position: "top" | "bottom" | "left" | "right";
  text: string;
  element?: "small";
}

const labelPosition = {
  top: {
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  bottom: {
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 50%)",
  },
  left: {
    left: 0,
    top: "50%",
    transform: "translate(-50%, 0%) rotate(90deg)",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  right: {
    right: 0,
    top: "50%",
    transform: "translate(50%, 0%) rotate(90deg)",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
};

const GridLabel: React.FC<Props> = ({ gridArea, position, text, element = "small" }) => {
  const labelRef = useRef<HTMLElement>(null);

  const GridLabelHolder = styled.div`
    position: relative;
    grid-area: ${gridArea};
  `;

  const LabelElement = styled(element)(() => ({
    fontSize: "24px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    padding: "0 24px",
    color: "white",
    position: "absolute",
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
    ...labelPosition[position],
  }));

  useEffect(() => {
    const baffledLabel = baffle(labelRef.current);

    baffledLabel.start().set({
      speed: 75,
    });

    baffledLabel.reveal(2500);
  }, [labelRef.current]);

  return (
    <GridLabelHolder>
      <LabelElement ref={labelRef}>{text}</LabelElement>
    </GridLabelHolder>
  );
};

export default GridLabel;
