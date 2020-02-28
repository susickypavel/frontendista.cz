import React, { useRef, useEffect } from "react"
import { TimelineLite } from "gsap/dist/gsap"

import { StyledLogoSVG } from "./logo.styles"

const Logo: React.FC = () => {
  const logoTimeline = useRef<TimelineLite>()

  useEffect(() => {
    logoTimeline.current = new TimelineLite()

    logoTimeline.current
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
      .to("#logo path:nth-of-type(2)", {
        opacity: 1,
        translateX: 0,
        duration: 1.75,
        ease: "power4",
        delay: 0.25,
      })
      .to(
        "#logo path:nth-of-type(3)",
        {
          opacity: 1,
          translateX: 0,
          duration: 1.75,
          ease: "power4",
        },
        "-=1"
      )
  }, [])

  return <StyledLogoSVG id="logo" />
}

export default Logo
