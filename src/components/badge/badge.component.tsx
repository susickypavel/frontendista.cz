import React from "react";
import classNames from "classnames";

interface BadgeProps {
  type: BadgeType;
}

type BadgeType = "blog" | "gallery" | "new";

const icons: Record<BadgeType, JSX.Element> = {
  blog: (
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  ),
  gallery: (
    <path
      fillRule="evenodd"
      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  ),
  new: (
    <path
      fillRule="evenodd"
      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
      clipRule="evenodd"
    />
  ),
};

const colors: Record<BadgeType, { bg: string; icon: string }> = {
  blog: {
    bg: "bg-blue-400",
    icon: "#1D4ED8",
  },
  new: {
    bg: "bg-red-600",
    icon: "#F59E0B",
  },
  gallery: {
    bg: "bg-green-400",
    icon: "#16A34A",
  },
};

export const Badge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <div className={classNames(colors[type].bg, "rounded")}>
      <svg
        className="p-1 box-content"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="24"
        height="24"
        fill={colors[type].icon}
      >
        {icons[type]}
      </svg>
    </div>
  );
};
