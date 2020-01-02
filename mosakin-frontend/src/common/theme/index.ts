export type Palette =
  | "light"
  | "base"
  | "accent"
  | "spIconHover"
  | "border"
  | "white"
  | "black"
  | "red"
  | "whitesmoke"; //fixme;
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
export type FontSize = "base" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";

export interface PaletteProps {
  color: Palette;
}

export interface OpacityProps {
  opacity: Opacity;
}

export interface SpaceProps {
  space: Space;
}

export interface SizeProps {
  fontSize: FontSize;
}

export const paletteDict: { [P in Palette]: string } = {
  // 薄い青 ボタンに使用
  light: "#93C1EE",
  // 標準色 ヘッダやプルダウンに使用
  base: "#4676AB",
  // 濃い青 ホバーなどアクセントに使用
  accent: "#3C5E96",
  // SP アイコンホバー用 変更する可能性あり
  spIconHover: "#B2C6DF",
  border: "#DADADF",
  white: "#FFFFFF",
  black: "#868181",
  red: "#DD4444",
  whitesmoke: "#F5F5F5" // fixme トグルホバー時の色
};

export const opacityDict: { [P in Opacity]: number } = {
  nomal: 1,
  half: 0.5,
  low: 0.2
};

export const spaceDict: { [P in Space]: string } = {
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

export const PcFontSizeDict: { [P in FontSize]: string } = {
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

export const SpFontSizeDict: { [P in FontSize]: string } = {
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
