import React from "react";
import styled from "@emotion/styled";
import { ModalState } from "./useModalAnimation";

export const ANIMATION_MS = 300;

interface ModalBackgroundProps {
  backgroundColor: string;
  trans: ModalState;
}

const ModalBackground = styled.div<ModalBackgroundProps>`
  position: fixed;
  left: ${({ trans }) => (trans === "close" ? "1000vw" : "0")};
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const ModalContent = styled.div`
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

export type ModalRendererProps = {
  trans: ModalState;
  onClickBackground: () => void;
} & ModalRendererPropsFromParent;

export type ModalRendererPropsFromParent = React.PropsWithChildren<{
  backgroundColor?: string;
  contentClass?: string;
}>;

export const ModalRenderer: React.FC<ModalRendererProps> = ({
  trans,
  onClickBackground,
  backgroundColor = "rgba(0, 0, 0, 0.5)",
  children,
  contentClass
}) => {
  return (
    <ModalWapper trans={trans}>
      <ModalBackground
        trans={trans}
        backgroundColor={backgroundColor}
        onClick={() => trans === "open" && onClickBackground()}
      >
        <ModalContent
          className={contentClass}
          onClick={e => e.preventDefault()}
        >
          {trans !== "close" && children}
        </ModalContent>
      </ModalBackground>
    </ModalWapper>
  );
};
