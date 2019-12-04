import { Palette } from "@/common/theme";

export type PullDownFontColorType = "1";
export type PullDownBackColorType = "1";
export type PullDownBordeRadiusType = "1" | "2" | "3";

export const PullDownFontColor: {
  [P in PullDownFontColorType]: Palette;
} = {
  1: "white"
};

export const PullDownBackColor: {
  [P in PullDownBackColorType]: Palette;
} = {
  1: "base"
};

export const PullDownBorderRadius: {
  [P in PullDownBordeRadiusType]: string;
} = {
  1: "3px 3px 0 0",
  2: "0",
  3: "0 0 3px 3px"
};