import { useState } from "react";
import { axios } from "@/common/api/axios";
import { NewPaidViewModel, NewPaidItem } from "@/models/models/newPaid";
import { convertStatusIntoMessage } from "@/hooks/useErrorInfo";

export const useNewPaid = (): NewPaidViewModel => {
  const [dateValue, dateSetValue] = useState("");
  const [paidTimeValue, paidTimeOnChange] = useState("");
  const [reasonValue, reasonSetValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // FIXME: 管理者情報を取得して表示する処理を追記してください
  const createData: NewPaidItem = {
    userName: "芳賀樹生",
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    paidTimeValue: paidTimeValue,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: true
  };
  const onSubmit = () => {
    axios
      .post(`/add`, {
        paidAcquisitionDate: createData.dateValue,
        paidTimeType: paidTimeValue,
        paidReason: reasonValue
      })
      .then(res => {
        console.log(res);
        setErrorMessage("");
      })
      .catch(error => {
        setErrorMessage(convertStatusIntoMessage(error.response.status));
      });
  };
  return {
    data: createData,
    errors: {
      errors: errorMessage ? [{ content: errorMessage }] : []
    },
    onSubmit: onSubmit
  };
};
