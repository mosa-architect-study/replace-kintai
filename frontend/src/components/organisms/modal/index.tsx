import React from "react";
import { useModalAnimation } from "./useModalAnimation";
import { ModalRenderer, ANIMATION_MS } from "./renderer";
import { ModalCloseProvider, useModalClose } from "./close";

export { useModalClose };
export type ModalProps = React.PropsWithChildren<{
  onClose: () => void;
  isOpen: boolean;
  backgroundColor?: string;
}>;

export const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  isOpen,
  backgroundColor = "rgba(0, 0, 0, 0.5)"
}) => {
  const trans = useModalAnimation(isOpen, ANIMATION_MS);
  return (
    <ModalCloseProvider value={onClose}>
      <ModalRenderer
        trans={trans}
        onClickBackground={onClose}
        backgroundColor={backgroundColor}
      >
        {children}
      </ModalRenderer>
    </ModalCloseProvider>
  );
};
