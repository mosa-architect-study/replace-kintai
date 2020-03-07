import { FontSize, Palette } from "@/common/theme";

export type CaptionLevel = "h1" | "h2" | "h3" | "h4" | "h5";
export type CaptionColorType = "1" | "2";

export const captionLevelToFrontSize: { [P in CaptionLevel]: FontSize } = {
  h1: "_30px",
  h2: "_24px",
  h3: "_20px",
  h4: "_18px",
  h5: "_14px"
};

export const captionColor: { [P in CaptionColorType]: Palette } = {
  1: "black",
  2: "base"
};
