type CaptionSize = "h1" | "h2" | "h3" | "h4" | "h5";
type IconSize = "l" | "s";
type Palette =
  | "light"
  | "base"
  | "accent"
  | "spIconHover"
  | "white"
  | "black"
  | "red";
type Opacity = "nomal" | "half" | "low";
type Space =
  | "nothing"
  | "xxxs"
  | "xxs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "xxxl";
type TextSize = "base" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";

export interface CaptionProps {
  lv: CaptionSize;
}

export interface IconProps {
  size: IconSize;
}

export interface PaletteProps {
  color: Palette;
}

export interface OpacityProps {
  opacity: Opacity;
}

export interface SpaceProps {
  space: Space;
}

export interface TextProps {
  fontSize: TextSize;
}

export const captionSizeDict: { [P in CaptionSize]: string } = {
  h1: "48px",
  h2: "30px",
  h3: "24px",
  h4: "20px",
  h5: "17px"
};

export const userIconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  l: "62px",
  s: "62px"
};

export const iconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  l: "30px",
  s: "40px"
};

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

export const paletteDist: { [P in Palette]: string } = {
  // 薄い青 ボタンに使用
  light: "#93C1EE",
  // 標準色 ヘッダやプルダウンに使用
  base: "#4676AB",
  // 濃い青 ホバーなどアクセントに使用
  accent: "#3C5E96",
  // SP アイコンホバー用 変更する可能性あり
  spIconHover: "#B2C6DF",
  white: "#FFFFFF",
  black: "#868181",
  red: "#DD4444"
};

export const opacityDist: { [P in Opacity]: number } = {
  nomal: 1,
  half: 0.5,
  low: 0.2
};

export const spaceDist: { [P in Space]: string } = {
  nothing: "0px",
  xxxs: "2px",
  xxs: "4px",
  xs: "8px",
  s: "16px",
  m: "24px",
  l: "32px",
  xl: "48px",
  xxl: "64px",
  xxxl: "80px"
};
