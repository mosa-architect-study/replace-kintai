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
  const [data, setData] = useState<{
    list: PaidListItem[];
    header: PaidListHeaderViewModel;
  }>();

  useEffect(() => {
    axios.get("/list").then(res => {
      setData(res.data);
    });
  }, []);

  return data
    ? {
        status: "Fetched",
        data: {
          header: data.header,
          list: data.list.map<PaidListRowViewModel>(item => ({
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
        }
      }
    : {
        status: "Loading"
      };
};
