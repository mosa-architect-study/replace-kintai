import { useEffectOnUpdate, useSmartState } from "@/util/hooks";

export type ModalState = "close" | "transition" | "open";

type TransitionFlg = "close" | "open";

export const useModalAnimation = (isOpen: boolean, ms: number): ModalState => {
  const { state, update, updateWithoutRender } = useSmartState<TransitionFlg>(
    isOpen ? "open" : "close"
  );
  useEffectOnUpdate(() => {
    if (!isOpen) {
      setTimeout(() => update("close"), ms);
    } else {
      updateWithoutRender("open");
    }
  }, [isOpen]);
  return isOpen ? "open" : state === "open" ? "transition" : "close";
};
