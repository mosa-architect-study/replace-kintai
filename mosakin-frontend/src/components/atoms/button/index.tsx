import styled from "@emotion/styled";
import * as Constant from "./constant";
import { paletteDict } from "@/common/theme";

interface ButtonProps {
  backgroundColor: Constant.ButtonBackColorType;
  width: Constant.ButtonWidthType;
  height: Constant.ButtonHeightType;
}

//FIXME: ホバー時の色固定か
const ButtonStyle = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:hover {
    background-color: ${paletteDict.accent};
    transition-duration: 0.5s;
  }
  &:active {
    box-shadow: none;
    transform: translate3d(0, 3px, 0);
    transition-duration: 0.25s;
  }
  &:focus {
    outline: 0;
  }
`;

export const Button = styled(ButtonStyle)<ButtonProps>`
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.ButtonBackColor[backgroundColor]]};
  width: ${({ width }) => Constant.ButtonWidth[width]};
  height: ${({ height }) => Constant.ButtonHeight[height]};
`;
