import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SocialIconHolder = styled(motion.a)`
  display: inline-block;
  padding: 1.2em;
  position: relative;
  margin: 0 auto;

  &:focus {
    outline: none;
  }
`;

export const BorderSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;
