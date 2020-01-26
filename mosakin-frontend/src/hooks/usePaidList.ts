import { LoadableViewModel } from "../models/models/common";
import { PaidListViewModel } from "../models/models/paidList";
import { useState, useEffect } from "react";
import { axios } from "@/common/api/axios";

/**
 * hooksのサンプル
 * APIからデータを取ってきてstateに詰めている
 */
export const usePaidList = (): LoadableViewModel<PaidListViewModel> => {
  const [model, setModel] = useState<PaidListViewModel | null>(null);

  useEffect(() => {
    axios.get("/list").then(res => {
      setModel(res.data);
    });
  }, []);

  return model
    ? {
        status: "Fetched",
        data: model
      }
    : {
        status: "Loading"
      };
};
