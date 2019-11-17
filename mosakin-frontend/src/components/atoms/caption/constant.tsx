import { FontSize } from "@/common/theme";

export type CaptionLevel = "h1" | "h2" | "h3" | "h4" | "h5";

export const captionLevelToFrontSize: { [P in CaptionLevel]: FontSize } = {
  h1: "xxxl",
  h2: "xl",
  h3: "m",
  h4: "s",
  h5: "xs"
};
