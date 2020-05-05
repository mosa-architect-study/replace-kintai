import { LoadableViewModel } from "../models/models/common";
import {
  PaidListViewModel,
  PaidListItem,
  PaidListHeaderViewModel,
  PaidListRowViewModel
} from "../models/models/paidList";
import { ErrorObject } from "@/models/models/error";
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
  const [errors, setErrors] = useState<ErrorObject[]>([]);

  useEffect(() => {
    axios
      .get("/list")
      .then(res => {
        setData(res.data);
        setErrors([]);
      })
      .catch(e => {
        console.log(e);
        setErrors([
          {
            content: "UNEXPECTED_ERROR"
          }
        ]);
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
          })),
          errors
        }
      }
    : {
        status: "Loading"
      };
};
