import { LoadableViewModel } from "../models/common";
import { PaidListViewModel } from "../models/paidList";
import { useState } from "react";
import { useAuthRequiredAPI } from "@/common/auth/useAuthorizedAPI";

/**
 * hooksのサンプル
 * APIからデータを取ってきてstateに詰めている
 */
export const usePaidList = (): LoadableViewModel<PaidListViewModel> => {
  const [model, setModel] = useState<PaidListViewModel | null>(null);

  useAuthRequiredAPI(axios => {
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
