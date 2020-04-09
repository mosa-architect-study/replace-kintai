import React from "react";
import styled from "@emotion/styled";
import { paletteDict, bp } from "@/common/theme";
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
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 75%;
  height: 90%;
  margin: auto;
  /* FIX ME: paddingは仮. コンテンツを入れたときに修正してください */
  padding: 50px 100px;
  overflow: auto;
  border-radius: 10px;
  background: ${paletteDict.white};
  @media (max-width: ${bp}) {
    width: 90%;
  }
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
  backgroundColor = "rgba(196, 196, 196, 0.7)",
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
          onClick={e => e.stopPropagation()}
        >
          {trans !== "close" && children}
        </ModalContent>
      </ModalBackground>
    </ModalWapper>
  );
};
