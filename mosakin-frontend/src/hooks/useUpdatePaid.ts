import { UpdatePaidViewModel, UpdatePaidItem } from "../models/UpdatePaid";
import { useState } from "react";
import { axios } from "@/common/api/axios";
import { ErrorObject } from "@/models/error";

export const useUpdatePaid = (): UpdatePaidViewModel => {
  // TODO どう前画面からデータをうけとるか
  const paidId = "1";
  const userName = "芳賀樹生";
  const beforeValue = "2019-07-22";
  const beforePaidTimeValue = "ALL_DAY";
  const [dateValue, dateSetValue] = useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = useState("データを更新するよ");
  const [errors, setErrors] = useState<ErrorObject[]>([]);

  const updateData: UpdatePaidItem = {
    paidId: paidId,
    userName: userName,
    beforeValue: beforeValue,
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    beforePaidTimeValue: beforePaidTimeValue,
    paidTimeValue: paidTimeValue,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: true,
  };
  const onSubmit = () => {
    axios
      .post(`/update`, {
        paidId: updateData.paidId,
        beforeAcquisitionDate: updateData.beforeValue,
        paidAcquisitionDate: updateData.dateValue,
        beforePaidTimeType: updateData.beforePaidTimeValue,
        paidTimeType: paidTimeValue,
        paidReason: reasonValue,
        paidAcquisitionUserId: "mosaarchitect.study@gmail.com", //TODO: 渡ってきた有給のIDを使おう
      },
        {
          validateStatus: function (status) {
            return status < 500;
          }
        })
      .then(res => {
        if (res.status === 500) {
          setErrors([
            {
              content: "INTERNAL_SEWRVER_ERROR"
            }
          ]);
        } else {
          switch (res.data) {
            case "SUCCESS":
              setErrors([]);
              break;
            case "DUPLICATED":
              setErrors([
                {
                  content: "DUPLICATED"
                }
              ]);
              break;
            case "NOTIFICATION_FAILED":
              setErrors([
                {
                  content: "NOTIFICATION_FAILED"
                }
              ]);
              break;
            default:
              // APIから返ってくるメッセージが予想外なパターン
              setErrors([
                {
                  content: "UNEXPECTED_ERROR"
                }
              ]);
              break;
          }
        }
      }).catch(e => {
        console.log(e);
        setErrors([{
          content: "UNEXPECTED_ERROR"
        }]);
      });
  };
  return { data: updateData, onSubmit: onSubmit, errors };
};
