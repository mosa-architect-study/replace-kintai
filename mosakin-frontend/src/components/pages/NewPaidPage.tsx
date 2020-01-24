import React from "react";
// import axios from "axios";
import { axios } from "../../common/api/axios";
import { CreatePage } from "../templates/create-page";

export const NewPaidPage: React.FC = () => {
  const [dateValue, dateSetValue] = React.useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = React.useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = React.useState(
    "ここは新規申請画面だよ！ｵｼﾞサンも、会社🏢、休んじゃおうｶﾅ〜🛌ﾅﾝﾁｬｯﾃ(^o^)😘"
  );
  const createData = {
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
  return (
    <div>
      <CreatePage data={createData} onSubmit={onSubmit}></CreatePage>
    </div>
  );
};
