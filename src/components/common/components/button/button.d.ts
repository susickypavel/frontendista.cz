type ColorsWithoutVariants = "black" | "white";

type ButtonColors =
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

type ButtonColorsVariant =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

type ForegroundColors =
  | `text_${ButtonColors}_${ButtonColorsVariant}`
  | `text_${ColorsWithoutVariants}`;

type BackgroundColors =
  | `bg_${ButtonColors}_${ButtonColorsVariant}`
  | `bg_${ColorsWithoutVariants}`;

export interface ButtonProps {
  className?: string;
}
