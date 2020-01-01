import styled from "@emotion/styled";
import { paletteDict, PcFontSizeDict, SpFontSizeDict } from "@/common/theme";

export type TextSize = "1" | "2" | "3";
export type TextFontColorType = "1" | "2" | "3";
export interface TextProps {
  color: TextFontColorType;
  size: TextSize;
}

//TODO: サイズ増やしたい(プルダウン pc:xs sp:22px)
const pcSizeDict: { [P in TextSize]: string } = {
  1: PcFontSizeDict.s,
  2: PcFontSizeDict.m,
  3: PcFontSizeDict.l
};
const spSizeDict: { [P in TextSize]: string } = {
  1: SpFontSizeDict.s,
  2: SpFontSizeDict.m,
  3: SpFontSizeDict.l
};
const textFontColor: { [P in TextFontColorType]: string } = {
  1: paletteDict.black,
  2: paletteDict.white,
  3: paletteDict.base
};

export const Text = styled.p<TextProps>`
  color: ${({ color }): string => textFontColor[color]};
  font-size: ${({ size }): string => pcSizeDict[size]};
  @media (max-width: 480px) {
    font-size: ${({ size }): string => spSizeDict[size]};
  }
`;
