import React, { useRef, useEffect, Dispatch, SetStateAction } from "react"
import { TimelineLite } from "gsap/dist/gsap"
import { SVGWrapper } from "./navigation-toggle.styles"

interface Props {
  onClick: Dispatch<SetStateAction<boolean>>
}

const NavigationToggle: React.FC<Props> = ({ onClick }) => {
  const toggleTimeline = useRef<TimelineLite>()

  useEffect(() => {
    toggleTimeline.current = new TimelineLite({
      paused: true,
    })

    toggleTimeline.current
      .to("#navigation-toggle line:nth-of-type(2)", {
        opacity: 0,
        duration: 0.25,
        ease: "power4",
      })
      .to("#navigation-toggle line:nth-of-type(1)", {
        translateY: 16,
        duration: 0.25,
        ease: "power4",
      })
      .to(
        "#navigation-toggle line:nth-of-type(3)",
        {
          translateY: -16,
          duration: 0.25,
          ease: "power4",
          onComplete: () => {
            onClick(false)
          },
          onReverseComplete: () => {
            onClick(true)
          },
        },
        "<"
      )
      .to("#navigation-toggle line:nth-of-type(1)", {
        rotate: "45deg",
        transformOrigin: "50% 50%",
        duration: 0.25,
        ease: "power4",
      })
      .to(
        "#navigation-toggle line:nth-of-type(3)",
        {
          rotate: "-45deg",
          transformOrigin: "50% 50%",
          duration: 0.25,
          ease: "power4",
        },
        "<"
      )
  }, [])

  return (
    <SVGWrapper
      id="navigation-toggle"
      width="76"
      height="76"
      viewBox="0 0 76 76"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        if (toggleTimeline.current?.reversed() || toggleTimeline.current?.paused()) {
          toggleTimeline.current?.play()
        } else {
          toggleTimeline.current?.reverse()
        }
      }}
    >
      <line x1="13" y1="22" x2="63" y2="22" stroke="white" strokeWidth="4" />
      <line x1="13" y1="38" x2="63" y2="38" stroke="white" strokeWidth="4" />
      <line x1="13" y1="54" x2="63" y2="54" stroke="white" strokeWidth="4" />
    </SVGWrapper>
  )
}

export default NavigationToggle
