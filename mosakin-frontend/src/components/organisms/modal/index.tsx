import React from "react";
import { useModalAnimation } from "./useModalAnimation";
import {
  ModalRenderer,
  ANIMATION_MS,
  ModalRendererPropsFromParent,
} from "./renderer";
import { ModalCloseProvider, useModalClose } from "./close";

export { useModalClose };
export type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
} & ModalRendererPropsFromParent;

export const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  isOpen,
  contentClass,
  backgroundColor,
}) => {
  const trans = useModalAnimation(isOpen, ANIMATION_MS);
  return (
    <ModalCloseProvider value={onClose}>
      <ModalRenderer
        trans={trans}
        onClickBackground={onClose}
        contentClass={contentClass}
        backgroundColor={backgroundColor}
      >
        {children}
      </ModalRenderer>
    </ModalCloseProvider>
  );
};
