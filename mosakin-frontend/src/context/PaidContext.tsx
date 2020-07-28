import React, { useContext } from "react";
import { PaidListItem } from "@/models/paidList";

type PaidListContextValue = () => PaidListItem;

export const PaidListContext = React.createContext<PaidListContextValue>(() => {
  throw new Error("");
});

export const usePaidContext: () => PaidListItem = () => {
  return useContext(PaidListContext)();
};
