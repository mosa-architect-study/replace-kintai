import React from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";
import { ToastComponent, PropsToastReceives } from "react-hooks-toasting";
import { paletteDict, fontSizeDict } from "@/common/theme";

type ToastType = "ERROR" | "SUCCESS";

interface ToastProps {
  message: string;
  type: ToastType;
}

interface DivProps {
  type: ToastType;
  status: PropsToastReceives["status"];
}

const animationStyleMap: Record<
  PropsToastReceives["status"],
  SerializedStyles
> = {
  entered: css`
    transform: translateX(-3vw);
    opacity: 1;
  `,
  exiting: css`
    transform: translateX(400px);
    opacity: 0;
  `,
  entering: css`
    transform: translateX(400px);
    opacity: 0;
  `
};

const typeToColorMap: Record<ToastType, SerializedStyles> = {
  ERROR: css`
    background-color: ${paletteDict.red};
  `,
  SUCCESS: css`
    background-color: ${paletteDict.light};
  `
};

const StyledDiv = styled.div<DivProps>`
  /** positioning */
  position: fixed;
  margin-top: 30px;
  right: 0px;
  /** animation */
  transition: transform 500ms, opacity 1000ms, top 500ms;
  ${({ status }) => animationStyleMap[status]}
  /** others */
  ${({ type }) => typeToColorMap[type]}
  color: ${paletteDict.white};
  font-size: ${fontSizeDict._18px};
  max-width: 330px;
  white-space: nowrap;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ToastItem: ToastComponent<ToastProps> = ({
  body,
  status,
  remove,
  position
}) => (
  <StyledDiv
    onClick={remove}
    type={body.type}
    status={status}
    style={{
      top: `${position * 50}px`
    }}
  >
    {body.message}
  </StyledDiv>
);
