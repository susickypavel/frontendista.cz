import React, { useRef, useEffect } from "react"
import { TimelineLite, Power1, Bounce } from "gsap/dist/gsap"

import { StyledLogoSVG } from "./logo.styles"

const Logo: React.FC = () => {
  const logoTimeline = useRef<TimelineLite>()

  useEffect(() => {
    logoTimeline.current = new TimelineLite()

    logoTimeline.current
      .set("#logo path:nth-of-type(2)", {
        transformOrigin: "center center",
        scale: 1,
        opacity: 0,
      })
      .set("#logo path:nth-of-type(3)", {
        scale: 1.1,
        opacity: 0,
        transformOrigin: "center center",
      })
      .set("#logo path:nth-of-type(4)", {
        scale: 1.1,
        opacity: 0,
        transformOrigin: "center center",
      })
      .to("#logo path:nth-of-type(2)", {
        delay: 0.5,
        duration: 3,
        scale: 1.2,
        opacity: 1,
        ease: "slow",
      })
      .to("#logo path:nth-of-type(2)", {
        scale: 1,
        ease: "slow",
        duration: 0.5,
      })
      .to("#logo path:nth-of-type(1)", {
        strokeDashoffset: 0,
        ease: Power1.easeIn,
        duration: 3,
      })
      .set("#logo path:nth-of-type(1)", {
        strokeDasharray: 0,
      })
      .to(
        "#logo path:nth-of-type(3)",
        {
          scale: 1,
          opacity: 1,
          ease: Power1.easeIn,
        },
        "<0.5"
      )
      .to(
        "#logo path:nth-of-type(4)",
        {
          scale: 1,
          opacity: 1,
          ease: Power1.easeIn,
        },
        "<0.5"
      )
      .to("#logo path:nth-of-type(4)", {
        delay: 1.25,
        attr: {
          fill: "#ff26a9",
        },
        duration: 0.25,
        ease: Bounce.easeIn,
      })
      .to("#logo path:nth-of-type(4)", {
        attr: {
          filter: "url(#C)",
        },
      })
  }, [])

  return <StyledLogoSVG id="logo" />
}

export default Logo
