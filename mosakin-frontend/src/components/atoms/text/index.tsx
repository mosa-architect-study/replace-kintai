import styled from "@emotion/styled";
import { fontSizeDict } from "@/common/theme";

export type TextSize = "0" | "1" | "2" | "3";
export interface TextProps {
  size: TextSize;
}

//TODO: サイズ増やしたい(プルダウン pc:xs sp:22px/h1|h2|h3...)
const pcSizeDict: { [P in TextSize]: string } = {
  0: fontSizeDict._14px,
  1: fontSizeDict._18px,
  2: fontSizeDict._20px,
  3: fontSizeDict._24px,
};

export const Text = styled.p<TextProps>`
  font-size: ${({ size }): string => pcSizeDict[size]};
`;
