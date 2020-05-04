import { useState } from "react";
import { axios } from "@/common/api/axios";
import { NewPaidViewModel, NewPaidItem } from "@/models/models/newPaid";
import { convertStatusIntoMessage } from "@/hooks/useErrorInfo";
import { useLoginInfo } from "@/context/LoginContext";

export const useNewPaid = (): NewPaidViewModel => {
  const [dateValue, dateSetValue] = useState("");
  const [paidTimeValue, paidTimeOnChange] = useState("");
  const [reasonValue, reasonSetValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
