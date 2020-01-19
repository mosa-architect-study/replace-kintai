import * as React from "react";
import styled from "@emotion/styled";
import { CaptionLevel, captionLevelToFrontSize } from "./constant";
import { paletteDict, fontSizeDict } from "@/common/theme";

export interface CaptionProps {
  lv: CaptionLevel;
}

type InnerProps = React.PropsWithChildren<{
  className?: string;
  lv: CaptionLevel;
}>;

const CaptionInner = (props: InnerProps): JSX.Element =>
  React.createElement(props.lv, props);

export const Caption = styled(CaptionInner)<CaptionProps>`
  color: ${paletteDict.black};
  font-size: ${({ lv }) => fontSizeDict[captionLevelToFrontSize[lv]]};
`;
