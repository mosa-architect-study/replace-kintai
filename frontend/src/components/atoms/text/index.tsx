import styled from "@emotion/styled";
import theme from "@/common/theme";

export type TextSize = "1" | "2" | "3";
export interface TextProps {
  size: TextSize;
}

const pcSizeDict: { [P in TextSize]: string } = {
	1: theme.pcFonts.s,
	2: theme.pcFonts.m,
	3: theme.pcFonts.l
};
const spSizeDict: { [P in TextSize]: string } = {
	1: theme.spFonts.s,
	2: theme.spFonts.m,
	3: theme.spFonts.l
};

export const Text = styled.p<TextProps>`
  color: ${theme.palette.black};
  font-size: ${({ size }): string => pcSizeDict[size]};
  @media (max-width: 480px) {
    font-size: ${({ size }): string => spSizeDict[size]};
  }
`;
