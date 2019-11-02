import React from "react";
import styled from "@emotion/styled";
import { ModalState } from "./useModalAnimation";

export const ANIMATION_MS = 300;

const ModalBackground = styled.div<{ backgroundColor: string }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const ModalFrame = styled.div`
  position: relative;
`;

const ModalWapper = styled.div<{ trans: ModalState }>`
  transition: opacity ${ANIMATION_MS}ms;
  opacity: ${({ trans }) => (trans === "open" ? 1 : 0)};
  position: absolute;
  z-index: 1000;
  left: ${({ trans }) => (trans === "close" ? "1000vw" : "0")};
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export type ModalRendererProps = React.PropsWithChildren<{
  trans: ModalState;
  onClickBackground: () => void;
  backgroundColor: string;
}>;

export const ModalRenderer: React.FC<ModalRendererProps> = ({
  trans,
  onClickBackground,
  backgroundColor,
  children
}) => {
  return (
    <ModalWapper trans={trans}>
      <ModalBackground
        backgroundColor={backgroundColor}
        onClick={() => trans === "open" && onClickBackground()}
      ></ModalBackground>
      <ModalFrame onClick={e => e.preventDefault()}>
        {trans !== "close" && children}
      </ModalFrame>
    </ModalWapper>
  );
};
