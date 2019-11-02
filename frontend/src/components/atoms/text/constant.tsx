type TextSize = "base" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";

export interface TextProps {
  fontSize: TextSize;
}

export const PcFontSize: { [P in TextSize]: string } = {
  //FIX ME どっかで調整する
  base: "14px",
  xs: "18px",
  s: "20px",
  m: "24px",
  l: "28px",
  xl: "32px",
  xxl: "36px",
  xxxl: "48px"
};

export const SpFontSize: { [P in TextSize]: string } = {
  //FIX ME どっかで調整する
  base: "7px",
  xs: "9px",
  s: "10px",
  m: "12px",
  l: "14px",
  xl: "16px",
  xxl: "18px",
  xxxl: "24px"
};
