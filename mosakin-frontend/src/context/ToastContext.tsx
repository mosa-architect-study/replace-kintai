import React, { useMemo, useContext } from "react";
import { useToasting } from "react-hooks-toasting";
import { ToastItem } from "@/components/molecules/toast";
import { ToastProps } from "@/models/toast";

export interface ToastContextValue {
  showToast(props: ToastProps): void;
}

const ToastContext = React.createContext<ToastContextValue>({
  showToast() {
    throw new Error("ToastContextProviderが設定されてません");
  },
});

export const useToast = () => useContext(ToastContext);

export const ToastContextProvider: React.FC = ({ children }) => {
  const { dispatch, renderToast } = useToasting(ToastItem, {
    exitingMS: 1000,
    displayMS: 15000,
  });

  const contextValue = useMemo<ToastContextValue>(() => {
    return {
      showToast: dispatch,
    };
  }, [dispatch]);

  return (
    <>
      <>{renderToast()}</>
      <ToastContext.Provider value={contextValue}>
        {children}
      </ToastContext.Provider>
    </>
  );
};
