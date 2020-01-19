import * as React from "react";
import styled from "@emotion/styled";
import * as Constant from "./constant";
import { paletteDict } from "@/common/theme";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  backgroundColor: Constant.ButtonBackColorType;
  width: Constant.ButtonWidthType;
  height: Constant.ButtonHeightType;
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  width: ${({ width }) => Constant.ButtonWidth[width]};
  height: ${({ height }) => Constant.ButtonHeight[height]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.ButtonBackColor[backgroundColor]]};
  &:hover {
    transition-duration: 0.5s;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: ${({ width }) => Constant.ButtonWidth[width]};
      height: ${({ height }) => Constant.ButtonHeight[height]};
      background: ${paletteDict.whitesmoke};
      border-radius: 10px;
    }
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

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type, backgroundColor, width, height, onClick, children } = props;
  return (
    <div>
      <StyledButton
        type={type}
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </div>
  );
};

export { Button };
