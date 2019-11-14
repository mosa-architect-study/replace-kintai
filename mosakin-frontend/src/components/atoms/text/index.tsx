import styled from "@emotion/styled";
import { paletteDict, PcFontSizeDict, SpFontSizeDict } from "@/common/theme";

export type TextSize = "1" | "2" | "3";
export interface TextProps {
  size: TextSize;
}

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

export const Text = styled.p<TextProps>`
  color: ${paletteDict.black};
  font-size: ${({ size }): string => pcSizeDict[size]};
  @media (max-width: 480px) {
    font-size: ${({ size }): string => spSizeDict[size]};
  }
`;
