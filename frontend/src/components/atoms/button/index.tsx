import styled from "@emotion/styled";
import * as Constant from "./constant";
import { paletteDict } from "@/common/theme";

interface ButtonProps {
  color: Constant.ButtonFontColorType;
  backgroundColor: Constant.ButtonBackColorType;
}

const ButtonStyle = styled.button`
  width: 98px;
  height: 44px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:hover {
    background-color: ${paletteDict.accent};
    transition-duration: 1s;
  }
  &:focus {
    outline: 0;
  }
`;

export const Button = styled(ButtonStyle)<ButtonProps>`
  color: ${({ color }) => paletteDict[Constant.ButtonFontColor[color]]};
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.ButtonBackColor[backgroundColor]]};
`;
