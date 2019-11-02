type CaptionSize = "h1" | "h2" | "h3" | "h4" | "h5";

export interface CaptionProps {
  lv: CaptionSize;
}

export const captionSizeDict: { [P in CaptionSize]: string } = {
  h1: "48px",
  h2: "30px",
  h3: "24px",
  h4: "20px",
  h5: "17px"
};
