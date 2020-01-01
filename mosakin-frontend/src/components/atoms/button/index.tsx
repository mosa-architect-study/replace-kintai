import styled from "@emotion/styled";
import * as Constant from "./constant";
import { paletteDict } from "@/common/theme";

interface ButtonProps {
  color: Constant.ButtonFontColorType;
  backgroundColor: Constant.ButtonBackColorType;
}

const StyledButton = styled.button`
  width: 98px;
  height: 44px;
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

export const Button = styled(StyledButton)<ButtonProps>`
  color: ${({ color }) => paletteDict[Constant.ButtonFontColor[color]]};
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.ButtonBackColor[backgroundColor]]};
`;
