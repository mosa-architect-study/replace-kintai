import { NewPaidViewModel, NewPaidItem } from "../models/models/newPaid";
import { useState } from "react";
import { axios } from "@/common/api/axios";

export const useNewPaid = (): NewPaidViewModel => {
  const [dateValue, dateSetValue] = useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = useState(
    "ここは新規申請画面だよ！ｵｼﾞサンも、会社🏢、休んじゃおうｶﾅ〜🛌ﾅﾝﾁｬｯﾃ(^o^)😘"
  );
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
      });
  };
  return { data: createData, action: onSubmit };
};
