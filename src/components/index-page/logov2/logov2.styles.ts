import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LogoHolder = styled.div`
  position: relative;
  width: auto;
`;

export const StyledLogoSVG = styled(motion.svg)`
  touch-action: none;
  max-width: 700px;
  width: 100%;
  height: auto;

  position: relative;
  z-index: 1;
`;
