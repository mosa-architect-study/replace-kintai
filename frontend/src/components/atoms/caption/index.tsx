import styled from "@emotion/styled";

export type CaptionSize = "1" | "2" | "3";
export interface CaptionProps {
  size: CaptionSize;
}

const sizeDict: { [P in CaptionSize]: number } = {
  1: 20,
  2: 28,
  3: 36
};

export const Caption = styled.span<CaptionProps>`
  font-size: ${({ size }): number => sizeDict[size]}px;
  color: #868181;
`;
