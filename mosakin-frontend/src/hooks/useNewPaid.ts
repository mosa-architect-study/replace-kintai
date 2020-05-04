import { useState } from "react";
import { axios } from "@/common/api/axios";
import { NewPaidViewModel, NewPaidItem } from "@/models/models/newPaid";
import { useLoginInfo } from "@/context/LoginContext";
import { ErrorObject } from "@/models/models/error";

export const useNewPaid = (): NewPaidViewModel => {
  const [dateValue, dateSetValue] = useState("");
  const [paidTimeValue, paidTimeOnChange] = useState("");
  const [reasonValue, reasonSetValue] = useState("");
  const [errors, setErrors] = useState<ErrorObject[]>([]);
  const user = useLoginInfo();

  const createData: NewPaidItem = {
    userName: user.user.name,
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    paidTimeValue: paidTimeValue,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: user.user.role === "ADMIN"
  };
  const onSubmit = () => {
    axios
      .post(`/add`, {
        paidAcquisitionDate: createData.dateValue,
        paidTimeType: paidTimeValue,
        paidReason: reasonValue
      })
      .then(res => {
        // 正常に処理ができていれば業務エラーでも200で返ってくる
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
      })
      .catch(e => {
        console.log(e);
        setErrors([
          {
            content: "UNEXPECTED_ERROR"
          }
        ]);
      });
  };
  return {
    data: createData,
    errors,
    onSubmit: onSubmit
  };
};
