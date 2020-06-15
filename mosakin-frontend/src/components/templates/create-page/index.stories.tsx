import React from "react";
import { storiesOf } from "@storybook/react";
import { CreatePage } from ".";
import { action } from "@storybook/addon-actions";

storiesOf("templates/CreatePage", module).add("CreatePage", () => {
  const [dateValue, dateSetValue] = React.useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = React.useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = React.useState("寝坊");
  const createData = {
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    paidTimeValue: paidTimeValue,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: false,
  };
  const onSubmit = () => action("ポチッとな");
  return (
    <div>
      <CreatePage data={createData} onSubmit={onSubmit}></CreatePage>
    </div>
  );
});

storiesOf("templates/CreatePage", module).add("CreatePage(admin)", () => {
  const [dateValue, dateSetValue] = React.useState("2019-07-22");
  const [paidTimeValue, paidTimeOnChange] = React.useState("ALL_DAY");
  const [reasonValue, reasonSetValue] = React.useState("寝坊");
  const createData = {
    userName: "芳賀樹生",
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    paidTimeValue: paidTimeValue,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: true,
  };
  const onSubmit = () => action("ポチッとな");
  return (
    <div>
      <CreatePage data={createData} onSubmit={onSubmit}></CreatePage>
    </div>
  );
});
