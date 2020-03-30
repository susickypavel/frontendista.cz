import React from "react";

import { FaGithub, FaLinkedin, FaDev, FaTwitter } from "react-icons/fa";

import {
  TextDescriptionSVG,
  DescriptionHolder,
  SocialIconsHolder,
} from "./description.styles";
import SocialIcon from "./social-icon/social-icon.component";
import { motion } from "framer-motion";

const icons = [
  {
    icon: FaGithub,
    href: "https://github.com/Thesoreon",
    color: "#FF019A",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pavel-susicky/",
    color: "#00F1FF",
  },
  {
    icon: FaDev,
    href: "https://dev.to/thesoreon",
    color: "#FF019A",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/Thesoreon",
    color: "#00F1FF",
  },
];

const descriptionPaths = [
  "M0.248047 45V0.839996H30.456V9.16H9.46405V20.04H28.536V28.36H9.46405V45H0.248047Z",
  "M37.623 45V0.839996H59.127C66.295 0.839996 69.879 4.424 69.879 11.592V18.888C69.879 24.2213 67.895 27.5707 63.927 28.936L71.159 43.08L70.071 45H62.135L54.327 29.64H46.839V45H37.623ZM46.839 21.32H58.743C60.023 21.32 60.663 20.68 60.663 19.4V11.08C60.663 9.8 60.023 9.16 58.743 9.16H46.839V21.32Z",
  "M78.483 34.248V11.592C78.483 4.424 82.067 0.839996 89.235 0.839996H103.827C110.995 0.839996 114.579 4.424 114.579 11.592V34.248C114.579 41.416 110.995 45 103.827 45H89.235C82.067 45 78.483 41.416 78.483 34.248ZM87.699 34.76C87.699 36.04 88.339 36.68 89.619 36.68H103.443C104.723 36.68 105.363 36.04 105.363 34.76V11.08C105.363 9.8 104.723 9.16 103.443 9.16H89.619C88.339 9.16 87.699 9.8 87.699 11.08V34.76Z",
  "M124.436 45V0.839996H134.42L151.956 29.832V0.839996H161.172V45H151.188L133.652 16.008V45H124.436Z",
  "M167.974 9.16V0.839996H204.07V9.16H190.63V45H181.414V9.16H167.974Z",
  "M210.873 45V0.839996H241.081V9.16H220.089V18.12H239.161V26.44H220.089V36.68H241.081V45H210.873Z",
  "M249.498 45V0.839996H259.482L277.018 29.832V0.839996H286.234V45H276.25L258.714 16.008V45H249.498Z",
  "M296.748 45V0.839996H313.516C325.548 0.839996 331.564 6.856 331.564 18.888V26.952C331.564 38.984 325.548 45 313.516 45H296.748ZM305.964 36.68H314.028C319.575 36.68 322.348 33.9067 322.348 28.36V17.48C322.348 11.9333 319.575 9.16 314.028 9.16H305.964V36.68Z",
  "M356.186 45V0.839996H372.954C384.986 0.839996 391.002 6.856 391.002 18.888V26.952C391.002 38.984 384.986 45 372.954 45H356.186ZM365.402 36.68H373.466C379.012 36.68 381.786 33.9067 381.786 28.36V17.48C381.786 11.9333 379.012 9.16 373.466 9.16H365.402V36.68Z",
  "M400.248 45V0.839996H430.456V9.16H409.464V18.12H428.536V26.44H409.464V36.68H430.456V45H400.248Z",
  "M434.777 2.568L435.929 0.839996H443.993L454.105 36.68H455.129L465.241 0.839996H473.305L474.457 2.568L461.913 45H447.321L434.777 2.568Z",
  "M480.873 45V0.839996H511.081V9.16H490.089V18.12H509.161V26.44H490.089V36.68H511.081V45H480.873Z",
  "M519.498 45V0.839996H528.714V36.68H547.786V45H519.498Z",
  "M553.921 34.248V11.592C553.921 4.424 557.505 0.839996 564.673 0.839996H579.265C586.433 0.839996 590.017 4.424 590.017 11.592V34.248C590.017 41.416 586.433 45 579.265 45H564.673C557.505 45 553.921 41.416 553.921 34.248ZM563.137 34.76C563.137 36.04 563.777 36.68 565.057 36.68H578.881C580.161 36.68 580.801 36.04 580.801 34.76V11.08C580.801 9.8 580.161 9.16 578.881 9.16H565.057C563.777 9.16 563.137 9.8 563.137 11.08V34.76Z",
  "M599.873 45V0.839996H621.377C628.545 0.839996 632.129 4.424 632.129 11.592V20.168C632.129 27.336 628.545 30.92 621.377 30.92H609.089V45H599.873ZM609.089 22.6H620.993C622.273 22.6 622.913 21.96 622.913 20.68V11.08C622.913 9.8 622.273 9.16 620.993 9.16H609.089V22.6Z",
  "M640.686 45V0.839996H670.894V9.16H649.902V18.12H668.974V26.44H649.902V36.68H670.894V45H640.686Z",
  "M679.311 45V0.839996H700.815C707.983 0.839996 711.567 4.424 711.567 11.592V18.888C711.567 24.2213 709.583 27.5707 705.615 28.936L712.847 43.08L711.759 45H703.823L696.015 29.64H688.527V45H679.311ZM688.527 21.32H700.431C701.711 21.32 702.351 20.68 702.351 19.4V11.08C702.351 9.8 701.711 9.16 700.431 9.16H688.527V21.32Z",
  "M0.248047 109V64.84H30.456V73.16H9.46405V84.04H28.536V92.36H9.46405V109H0.248047Z",
  "M37.623 109V64.84H59.127C66.295 64.84 69.879 68.424 69.879 75.592V82.888C69.879 88.2213 67.895 91.5707 63.927 92.936L71.159 107.08L70.071 109H62.135L54.327 93.64H46.839V109H37.623ZM46.839 85.32H58.743C60.023 85.32 60.663 84.68 60.663 83.4V75.08C60.663 73.8 60.023 73.16 58.743 73.16H46.839V85.32Z",
  "M78.483 98.248V75.592C78.483 68.424 82.067 64.84 89.235 64.84H103.827C110.995 64.84 114.579 68.424 114.579 75.592V98.248C114.579 105.416 110.995 109 103.827 109H89.235C82.067 109 78.483 105.416 78.483 98.248ZM87.699 98.76C87.699 100.04 88.339 100.68 89.619 100.68H103.443C104.723 100.68 105.363 100.04 105.363 98.76V75.08C105.363 73.8 104.723 73.16 103.443 73.16H89.619C88.339 73.16 87.699 73.8 87.699 75.08V98.76Z",
  "M124.436 109V64.84H135.444L147.924 91.528L160.404 64.84H171.412V109H162.196V81.096L151.828 103.24H144.02L133.652 81.096V109H124.436Z",
  "M196.671 98.248V75.592C196.671 68.424 200.255 64.84 207.423 64.84H224.511L228.799 68.168V73.16H207.807C206.527 73.16 205.887 73.8 205.887 75.08V98.76C205.887 100.04 206.527 100.68 207.807 100.68H228.799V105.672L224.511 109H207.423C200.255 109 196.671 105.416 196.671 98.248Z",
  "M234.688 109V101.832L255.936 73.16H235.328V64.84H267.584V72.008L246.336 100.68H268.224V109H234.688Z",
  "M276.186 109V64.84H306.394V73.16H285.402V82.12H304.474V90.44H285.402V100.68H306.394V109H276.186Z",
  "M314.171 98.248V75.592C314.171 68.424 317.755 64.84 324.923 64.84H342.011L346.299 68.168V73.16H325.307C324.027 73.16 323.387 73.8 323.387 75.08V98.76C323.387 100.04 324.027 100.68 325.307 100.68H346.299V105.672L342.011 109H324.923C317.755 109 314.171 105.416 314.171 98.248Z",
  "M354.748 109V64.84H363.964V82.12H380.348V64.84H389.564V109H380.348V90.44H363.964V109H354.748Z",
  "M415.436 109V64.84H436.94C444.108 64.84 447.692 68.424 447.692 75.592V82.888C447.692 88.2213 445.708 91.5707 441.74 92.936L448.972 107.08L447.884 109H439.948L432.14 93.64H424.652V109H415.436ZM424.652 85.32H436.556C437.836 85.32 438.476 84.68 438.476 83.4V75.08C438.476 73.8 437.836 73.16 436.556 73.16H424.652V85.32Z",
  "M456.936 109V64.84H487.144V73.16H466.152V82.12H485.224V90.44H466.152V100.68H487.144V109H456.936Z",
  "M495.561 109V64.84H517.065C524.233 64.84 527.817 68.424 527.817 75.592V84.168C527.817 91.336 524.233 94.92 517.065 94.92H504.777V109H495.561ZM504.777 86.6H516.681C517.961 86.6 518.601 85.96 518.601 84.68V75.08C518.601 73.8 517.961 73.16 516.681 73.16H504.777V86.6Z",
  "M535.989 98.248V64.84H545.205V98.76C545.205 100.04 545.845 100.68 547.125 100.68H559.669C560.949 100.68 561.589 100.04 561.589 98.76V64.84H570.805V98.248C570.805 105.416 567.221 109 560.053 109H546.741C539.573 109 535.989 105.416 535.989 98.248Z",
  "M580.936 109V64.84H601.8C608.968 64.84 612.552 68.424 612.552 75.592V79.432C612.552 80.8827 612.125 82.12 611.272 83.144L609.032 85.832L611.72 88.072C613.128 89.224 613.832 90.9307 613.832 93.192V98.248C613.832 105.416 610.248 109 603.08 109H580.936ZM590.152 100.68H602.696C603.976 100.68 604.616 100.04 604.616 98.76V92.36C604.616 91.08 603.976 90.44 602.696 90.44H590.152V100.68ZM590.152 82.12H601.416C602.696 82.12 603.336 81.48 603.336 80.2V75.08C603.336 73.8 602.696 73.16 601.416 73.16H590.152V82.12Z",
  "M622.686 109V64.84H631.902V100.68H650.974V109H622.686Z",
  "M657.748 109V64.84H666.964V109H657.748Z",
  "M676.796 98.248V75.592C676.796 68.424 680.38 64.84 687.548 64.84H704.636L708.924 68.168V73.16H687.932C686.652 73.16 686.012 73.8 686.012 75.08V98.76C686.012 100.04 686.652 100.68 687.932 100.68H708.924V105.672L704.636 109H687.548C680.38 109 676.796 105.416 676.796 98.248Z",
];

const Description: React.FC = () => {
  return (
    <DescriptionHolder>
      <TextDescriptionSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 713 109"
        width="713"
        height="109"
        initial="hidden"
        animate="visible"
      >
        {descriptionPaths.map((path, index) => {
          return (
            <motion.path
              d={path}
              key={index}
              variants={{
                hidden: {
                  strokeLinecap: "inherit",
                  fill: "rgba(33, 33, 33, 1.0)",
                },
                visible: {
                  strokeLinecap: "square",
                  fill: "rgba(255, 255, 255, 1.0)",
                  transition: {
                    duration: 2,
                    delay: Math.random(),
                  },
                },
              }}
            />
          );
        })}
      </TextDescriptionSVG>
      <SocialIconsHolder
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.33,
            },
          },
        }}
      >
        {icons.map(icon => (
          <SocialIcon iconProps={icon} key={icon.href} />
        ))}
      </SocialIconsHolder>
    </DescriptionHolder>
  );
};

export default Description;