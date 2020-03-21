import styled from "@emotion/styled";

import LogoSVG from "../../../assets/logo.svg";

export const StyledLogoSVG = styled(LogoSVG)`
  /* height: auto; */
  width: 100%;

  & path:nth-of-type(1) {
    stroke-dasharray: 2300;
    stroke-dashoffset: 2300;
    stroke-linejoin: bevel;
  }

  & path:nth-of-type(2) {
    stroke-linejoin: bevel;
    opacity: 0;
  }

  & path:nth-of-type(3) {
    opacity: 0;
  }

  & path:nth-of-type(4) {
    opacity: 0;
  }
`;
