import styled from "@emotion/styled"

import LogoSVG from "../../../assets/logo.svg"

export const StyledLogoSVG = styled(LogoSVG)`
  width: 500px;

  & path:nth-of-type(1) {
    stroke-dasharray: 1250;
    stroke-dashoffset: 1250;
  }

  & path:nth-of-type(2) {
    opacity: 0;
    transform: translateX(-105%);
  }

  & path:nth-of-type(3) {
    opacity: 0;
    transform: translateX(105%);
  }
`
