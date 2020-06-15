import { UpdatePaidViewModel, UpdatePaidItem } from "../models/UpdatePaid";
import { useState } from "react";
import { axios } from "@/common/api/axios";

export const useUpdatePaid = (): UpdatePaidViewModel => {
  // TODO どう前画面からデータをうけとるか
  const paidId = "1";
  const userName = "芳賀樹生";
  const beforeValue = "2019-07-22";
  const beforePaidTimeValue = "ALL_DAY";
  const [dateValue, dateSetValue] = useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = useState("データを更新するよ");
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
      })
      .then(res => {
        console.log(res);
      });
  };
  return { data: updateData, onSubmit: onSubmit };
};
