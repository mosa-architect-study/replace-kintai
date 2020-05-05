import React, { useState, useEffect, useContext } from "react";
import { PaidListItem } from "@/models/models/paidList";
import { axios } from "@/common/api/axios";

type PaidListContextValue = () => PaidListItem;

export const PaidListContext = React.createContext<PaidListContextValue>(() => {
  throw new Error("");
});

export const usePaidInfo: () => PaidListItem = () => {
  return useContext(PaidListContext)();
};
