import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LogoHolder = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;
`;

export const StyledLogoSVG = styled(motion.svg)`
  touch-action: none;
  height: 100%;
  width: auto;
`;
