import * as React from "react";
import styled from "@emotion/styled";
import {
  CaptionLevel,
  CaptionColorType,
  captionLevelToFrontSize,
  captionColor,
} from "./constant";
import { paletteDict, fontSizeDict } from "@/common/theme";

export interface CaptionProps {
  lv: CaptionLevel;
  color: CaptionColorType;
}

type InnerProps = React.PropsWithChildren<{
  className?: string;
  lv: CaptionLevel;
  color: CaptionColorType;
}>;

const CaptionInner = (props: InnerProps): JSX.Element =>
  React.createElement(props.lv, props);

export const Caption = styled(CaptionInner)<CaptionProps>`
  color: ${({ color }) => paletteDict[captionColor[color]]};
  font-size: ${({ lv }) => fontSizeDict[captionLevelToFrontSize[lv]]};
`;
