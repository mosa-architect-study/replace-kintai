import { Palette } from "@/common/theme";

export type PullDownFontColorType = "1";
export type PullDownBackColorType = "1";

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
