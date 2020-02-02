import styled from "@emotion/styled";
import { paletteDict, fontSizeDict } from "@/common/theme";

export type TextSize = "1" | "2" | "3";
export type TextFontColorType = "1" | "2" | "3";
export interface TextProps {
  color: TextFontColorType;
  size: TextSize;
}

//TODO: サイズ増やしたい(プルダウン pc:xs sp:22px/h1|h2|h3...)
const pcSizeDict: { [P in TextSize]: string } = {
  1: fontSizeDict._18px,
  2: fontSizeDict._20px,
  3: fontSizeDict._24px
};
const textFontColor: { [P in TextFontColorType]: string } = {
  1: paletteDict.black,
  2: paletteDict.white,
  3: paletteDict.base
};

export const Text = styled.p<TextProps>`
  color: ${({ color }): string => textFontColor[color]};
  font-size: ${({ size }): string => pcSizeDict[size]};
`;
