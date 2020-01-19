export type Palette =
  | "light"
  | "base"
  | "accent"
  | "border"
  | "white"
  | "black"
  | "red"
  | "whitesmoke";
export type FontSize = "_18px" | "_20px" | "_24px" | "_30px";

export interface PaletteProps {
  color: Palette;
}

export interface SizeProps {
  fontSize: FontSize;
}

export const paletteDict: { [P in Palette]: string } = {
  // 薄い青 ボタンに使用
  light: "rgba(147, 193, 238, 1)",
  // 標準色 ヘッダやプルダウンに使用
  base: "rgba(70, 118, 171, 1)",
  // 濃い青 ホバーなどアクセントに使用
  accent: "rgba(60, 94, 150, 1)",
  border: "rgba(218, 218, 223, 1)",
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(134, 129, 129, 1)",
  red: "rgba(221, 68, 68, 1)",
  // ホバー用
  whitesmoke: "rgba(245, 245, 245, 0.3)"
};

export const fontSizeDict: { [P in FontSize]: string } = {
  _18px: "18px",
  _20px: "20px",
  _24px: "24px",
  _30px: "30px"
};
