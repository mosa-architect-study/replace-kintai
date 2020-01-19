import React from "react";
import { storiesOf } from "@storybook/react";
import { CreatePage } from ".";
import { action } from "@storybook/addon-actions";

storiesOf("templates/CreatePage", module).add("CreatePage", () => {
  const [dateValue, dateSetValue] = React.useState("2019-07-22");
  const [padeTimeValue, padeTimeOnChange] = React.useState("all-day");
  const [reasonValue, reasonSetValue] = React.useState("寝坊");
  const createData = {
    title: "新規申請",
    userName: "芳賀樹生",
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    padeTimeValue: padeTimeValue,
    padeTimeOnChange: padeTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: true,
    onClick: action("ポチッとな")
  };
  return (
    <div>
      <CreatePage data={createData}></CreatePage>
    </div>
  );
});
