import React from "react";
import { storiesOf } from "@storybook/react";
import { UpdatePage } from ".";
import { action } from "@storybook/addon-actions";

storiesOf("templates/UpdatePage", module).add("UpdatePage", () => {
  const [dateValue, dateSetValue] = React.useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = React.useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = React.useState("間違えました");
  const updateData = {
    paidId: "1",
    beforeValue: dateValue,
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    beforePaidTimeValue: paidTimeValue,
    paidTimeValue: paidTimeValue,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: false
  };
  const onSubmit = () => action("ポチッとな");
  return (
    <div>
      <UpdatePage data={updateData} onSubmit={onSubmit}></UpdatePage>
    </div>
  );
});

storiesOf("templates/UpdatePage", module).add("UpdatePage(admin)", () => {
  const [dateValue, dateSetValue] = React.useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = React.useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = React.useState("間違えました");
  const updateData = {
    paidId: "1",
    userName: "芳賀樹生",
    beforeValue: dateValue,
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    beforePaidTimeValue: paidTimeValue,
    paidTimeValue: paidTimeValue,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: true
  };
  const onSubmit = () => action("ポチッとな");
  return (
    <div>
      <UpdatePage data={updateData} onSubmit={onSubmit}></UpdatePage>
    </div>
  );
});
