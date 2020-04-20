import React, { useRef, useState } from "react";
import { css } from "@emotion/core";
import { useSpring, motion, useTransform } from "framer-motion";

const binaries = [
  "1C",
  "2A",
  "D2",
  "11",
  "55",
  "BD",
  "E9",
  "54",
  "D3",
  "3F",
  "5E",
  "AC",
  "4B",
  "36",
  "C4",
  "4A",
];

const LINE_WIDTH = 5;
const SPOT_SIZE = 40;

const transformSpotPosition = (value: number) => value - (SPOT_SIZE - LINE_WIDTH) / 2;

const Memory: React.FC = () => {
  const [selected, setSelected] = useState<string>("00");
  const memoryHolderRef = useRef<HTMLDivElement>(null);

  const x = useSpring(0, {
    damping: 100,
    velocity: 5,
  });
  const y = useSpring(0, {
    damping: 100,
    velocity: 5,
  });

  const spotPositionX = useTransform(x, transformSpotPosition);
  const spotPositionY = useTransform(y, transformSpotPosition);

  const handleMouseClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const { left, top } = memoryHolderRef.current!.getBoundingClientRect();
    const size = e.currentTarget.getBoundingClientRect();

    x.set(size.x + size.width / 2 - left - LINE_WIDTH / 2);
    y.set(size.y + size.height / 2 - top - LINE_WIDTH / 2);
  };

  return (
    <div ref={memoryHolderRef} css={memoryHolder}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexFlow: "row wrap",
          borderBottom: "1px solid #424242",
        }}
      >
        <motion.div css={line} style={{ y }} />
        <motion.div css={verticalLine} style={{ x }} />
        <motion.div
          style={{
            top: 0,
            left: 0,
            x: spotPositionX,
            y: spotPositionY,
            width: `${SPOT_SIZE}px`,
            height: `${SPOT_SIZE}px`,
            background: "black",
            border: "2px solid white",
            position: "absolute",
            transformOrigin: "center center",
          }}
        />
        {binaries.map((binary, index) => (
          <span
            key={index}
            css={mm}
            onClick={e => {
              setSelected(binary);
              handleMouseClick(e);
            }}
            style={{ color: selected == binary ? "white" : "gray" }}
          >
            {binary}
          </span>
        ))}
      </div>
      <span style={{ color: "white" }}>0x{selected}</span>
      <button css={executeButton}>EXECUTE</button>
    </div>
  );
};

const memoryHolder = css({
  gridArea: "memory",
  position: "relative",
  height: "0",
  paddingTop: "100%",
});

const mm = css({
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
  flex: "1 0 25%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  zIndex: 1,
});

const line = css({
  position: "absolute",
  width: "100%",
  height: `${LINE_WIDTH}px`,
  background: "gray",
  transform: "translateY(50%)",
});

const verticalLine = css({
  position: "absolute",
  height: "100%",
  width: `${LINE_WIDTH}px`,
  background: "gray",
});

const executeButton = css({
  width: "100%",
  padding: "16px 8px",
  background: "black",
  border: "1px solid white",
  color: "white",
  fontWeight: "bold",
  fontFamily: "Oxanium",
});

export default Memory;
