import { LoadableViewModel } from "../models/models/common";
import { PaidListViewModel } from "../models/models/paidList";
import { useState } from "react";
import { useAxios } from "@/common/api/useAxios";

/**
 * hooksのサンプル
 * APIからデータを取ってきてstateに詰めている
 */
export const usePaidList = (): LoadableViewModel<PaidListViewModel> => {
  const [model, setModel] = useState<PaidListViewModel | null>(null);

  useAxios(axios => {
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
