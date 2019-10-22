import styled from "@emotion/styled";

export type TextSize = "1" | "2" | "3";
export interface TextProps {
  size: TextSize;
}

const sizeDict: { [P in TextSize]: number } = {
  1: 20,
  2: 28,
  3: 36
};

export const Text = styled.span<TextProps>`
  font-size: ${({ size }): number => sizeDict[size]}px;
  color: #868181;
`;
