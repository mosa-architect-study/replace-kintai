import { Palette } from "@/common/theme";

export type ButtonFontColorType = "1";
export type ButtonBackColorType = "1";

export const ButtonFontColor: { [P in ButtonFontColorType]: Palette } = {
  1: "white"
};

export const ButtonBackColor: { [P in ButtonBackColorType]: Palette } = {
  1: "light"
};
