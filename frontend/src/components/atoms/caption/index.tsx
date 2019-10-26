import * as React from "react";
import styled from "@emotion/styled";
import theme from "@/common/theme";

export type CaptionSize = "1" | "2" | "3";
export interface CaptionProps {
  size: CaptionSize;
}

const pcSizeDict: { [P in CaptionSize]: string } = {
  1: theme.pcFonts.s,
  2: theme.pcFonts.m,
  3: theme.pcFonts.l
};

const spSizeDict: { [P in CaptionSize]: string } = {
  1: theme.spFonts.s,
  2: theme.spFonts.m,
  3: theme.spFonts.l
};

const tagnameDict: { [P in CaptionSize]: "h1" | "h2" | "h3" } = {
  1: "h3",
  2: "h2",
  3: "h1"
};

type InnerProps = React.PropsWithChildren<{
  className?: string;
  size: CaptionSize;
}>;

const CaptionInner = (props: InnerProps): JSX.Element =>
  React.createElement(tagnameDict[props.size], props);

export const Caption = styled(CaptionInner)<CaptionProps>`
  color: ${theme.palette.black};
  font-size: ${({ size }): string => pcSizeDict[size]};
  @media (max-width: 480px) {
    font-size: ${({ size }): string => spSizeDict[size]};
  }
`;
