import React from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";
import { ToastComponent, PropsToastReceives } from "react-hooks-toasting";
import { paletteDict, fontSizeDict, bp } from "@/common/theme";
import { ToastType, ToastProps } from "@/models/toast";

interface DivProps {
  type: ToastType;
  status: PropsToastReceives["status"];
}

const animationStyleMap: Record<
  PropsToastReceives["status"],
  SerializedStyles
> = {
  entered: css`
    transform: translateX(-15px);
  `,
  exiting: css`
    transform: translateX(1000px);
    opacity: 0;
  `,
  entering: css`
    transform: translateX(1000px);
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
  margin-top: 15px;
  right: 0px;
  z-index: 1001;
  /** animation */
  transition: transform 500ms, opacity 1000ms, top 500ms;
  ${({ status }) => animationStyleMap[status]}
  /** others */
  ${({ type }) => typeToColorMap[type]}
  color: ${paletteDict.white};
  font-size: ${fontSizeDict._18px};
  max-width: 1000px;
  @media (max-width: ${bp}) {
    font-size: ${fontSizeDict._14px};
    max-width: 300px;
  }
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /*FIXME: ボタンから拝借。テーマとかに逃がすべきか*/
  white-space: nowrap;
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
