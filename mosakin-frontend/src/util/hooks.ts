import {
  useRef,
  useEffect,
  EffectCallback,
  DependencyList,
  useState,
} from "react";

// componentDidUpdate的な
export const useEffectOnUpdate = (
  cb: EffectCallback,
  deps?: DependencyList
) => {
  const hasInitializedRef = useRef(false);
  useEffect(() => {
    if (hasInitializedRef.current) {
      return cb();
    }
    hasInitializedRef.current = true;
    return;
  }, deps);
};

// stateをrefで持つことによって状態の変更後にrerenderを走らせない
export const useSmartState = <T>(init: T) => {
  const stateRef = useRef<T>(init);
  const [, update] = useState(false);
  return {
    state: stateRef.current,
    update(next: T) {
      stateRef.current = next;
      update(e => !e);
    },
    updateWithoutRender(next: T) {
      stateRef.current = next;
    },
  };
};
