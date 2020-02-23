import { LoadableViewModel } from "../models/models/common";
import {
  PaidListViewModel,
  PaidListItem,
  PaidListHeaderViewModel,
  PaidListRowViewModel
} from "../models/models/paidList";
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
      const list: PaidListItem[] = res.data.list;
      const header: PaidListHeaderViewModel = res.data.header;
      setModel({
        header,
        list: list.map<PaidListRowViewModel>(item => ({
          paid: item,
          // FIXME: メニューが押された時の挙動
          menu: {
            onDeleteButtonClick() {
              console.log("delete", item);
            },
            onEditButtonClick() {
              console.log("edit", item);
            }
          }
        }))
      });
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
