import React from "react";

import { FaHamburger } from "react-icons/fa";

interface Props {
  opened: boolean;
  setOpened: boolean;
}

const NavigationToggle: React.FC = () => {
  return <FaHamburger size="48px" />;
};

export default NavigationToggle;
