import { LoadableViewModel } from "../models/common";
import {
  PaidListViewModel,
  PaidListItem,
  PaidListHeaderViewModel,
  PaidListRowViewModel,
} from "../models/paidList";
import { useState, useEffect } from "react";
import { axios } from "@/common/api/axios";
import { ErrorObject } from "@/models/error";

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
      .get("/list", {
        validateStatus: function (status) {
          return status < 500;
        },
      })
      .then(res => {
        if (res.status === 500) {
          setErrors([
            {
              content: "INTERNAL_SEWRVER_ERROR",
            },
          ]);
        }
        if (res.data) {
          setErrors([]);
          setData(res.data);
        } else {
          // APIから返ってくるメッセージが予想外なパターン
          setErrors([
            {
              content: "UNEXPECTED_ERROR",
            },
          ]);
        }
      })
      .catch(e => {
        console.log(e);
        setErrors([
          {
            content: "UNEXPECTED_ERROR",
          },
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
              },
            },
          })),
          errors,
        },
      }
    : {
        status: "Loading",
      };
};
