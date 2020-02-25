import styled from "@emotion/styled"

import LogoSVG from "../../../assets/logo.svg"

export const StyledLogoSVG = styled(LogoSVG)`
  width: 0;

  & path:nth-of-type(1) {
    stroke-linecap: round;
    stroke-dasharray: 1250;
    stroke-dashoffset: 1250;
  }
`
