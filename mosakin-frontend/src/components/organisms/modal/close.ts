import { createContext, useContext } from "react";

export type CloseFunction = () => void;

const ModalCloseContext = createContext<CloseFunction | null>(null);

export const useModalClose = () => {
  const close = useContext(ModalCloseContext);
  if (!close) {
    throw new Error("do not use closeModal out of modal");
  }
  return close;
};

export const ModalCloseProvider = ModalCloseContext.Provider;
