import React from "react";
import { storiesOf } from "@storybook/react";
import { UpdatePage } from ".";
import { action } from "@storybook/addon-actions";

storiesOf("templates/UpdatePage", module).add("UpdatePage", () => {
  const [dateValue, dateSetValue] = React.useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = React.useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = React.useState("間違えました");
  const updateData = {
    userName: "芳賀樹生",
    dateValue: dateValue,
    dateOnChange: dateSetValue,
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
