import { useEffect, useState, useRef } from "react";
import throttle from "lodash.throttle";

export function useScrollHide() {
  const [hidden, setHidden] = useState(false);
  const previousScrollY = useRef(0);

  const handleScroll = throttle((e: Event) => {
    if (previousScrollY.current > window.scrollY) {
      setHidden(false);
    } else {
      setHidden(true);
    }

    previousScrollY.current = window.scrollY;
  }, 250);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    hidden,
    setHidden,
  };
}
