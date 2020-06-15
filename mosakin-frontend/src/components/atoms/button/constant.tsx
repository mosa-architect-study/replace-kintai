import { Palette } from "@/common/theme";

export type ButtonBackColorType = "1" | "2";
export type ButtonWidthType = "s" | "l";
export type ButtonHeightType = "s" | "l";

export const ButtonBackColor: { [P in ButtonBackColorType]: Palette } = {
  1: "light",
  2: "white",
};

export const ButtonWidth: { [P in ButtonWidthType]: string } = {
  s: "98px",
  l: "248px",
};

export const ButtonHeight: { [P in ButtonHeightType]: string } = {
  s: "44px",
  l: "60px",
};
