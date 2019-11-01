import styled from "@emotion/styled";
import { CaptionProps, captionSizeDict } from "../../../common/theme";

export const Caption = styled.span<CaptionProps>`
  font-size: ${({ lv }): string => captionSizeDict[lv]};
  color: #868181;
`;
