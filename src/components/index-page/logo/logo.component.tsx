import React, { useRef, useEffect } from "react"
import { TimelineLite } from "gsap/dist/gsap"

import { StyledLogoSVG } from "./logo.styles"

const Logo: React.FC = () => {
  const logoTimeline = useRef<TimelineLite>()

  useEffect(() => {
    logoTimeline.current = new TimelineLite()

    logoTimeline.current
      .to("#logo", {
        width: "500px",
        duration: 2,
        delay: 0.75,
        ease: "linear",
      })
      .to(
        "#logo path:nth-of-type(1)",
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "linear",
        },
        "<1"
      )
      .set("#logo path:nth-of-type(1)", {
        strokeDasharray: 0,
      })
  }, [])

  return <StyledLogoSVG id="logo" />
}

export default Logo
