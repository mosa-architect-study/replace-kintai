import {
  UpdatePaidViewModel,
  UpdatePaidItem
} from "../models/models/UpdatePaid";
import { useState } from "react";
import { axios } from "@/common/api/axios";
import { PaidItem } from "@/models/models/common";

export const useUpdatePaid = (): UpdatePaidViewModel => {
  // TODO どう前画面からデータをうけとるか
  const paidId = "1";
  const userName = "芳賀樹生";
  const beforeValue = "2019-07-22";
  const beforePaidTimeValue = "ALL_DAY";
  const [paidAcquisitionDate, dateSetValue] = useState("2019-07-22");
  const [paidTimeType, paidTimeOnChange] = useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = useState("データを更新するよ");
  const updateData: UpdatePaidItem & PaidItem = {
    paidId: paidId,
    userName: userName,
    beforeValue: beforeValue,
    paidAcquisitionDate: paidAcquisitionDate,
    dateOnChange: dateSetValue,
    beforePaidTimeValue: beforePaidTimeValue,
    paidTimeType: paidTimeType,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: true
  };
  const onSubmit = () => {
    axios
      .post(`/update`, {
        paidId: updateData.paidId,
        beforeAcquisitionDate: updateData.beforeValue,
        paidAcquisitionDate: updateData.paidAcquisitionDate,
        beforePaidTimeType: updateData.beforePaidTimeValue,
        paidTimeType: paidTimeType,
        paidReason: reasonValue
      })
      .then(res => {
        console.log(res);
      });
  };
  return { data: updateData, onSubmit: onSubmit };
};
