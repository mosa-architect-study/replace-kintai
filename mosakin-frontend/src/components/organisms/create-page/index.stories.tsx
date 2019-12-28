import React from "react";
import { storiesOf } from "@storybook/react";
import { CreatePage } from ".";
import { action } from "@storybook/addon-actions";

storiesOf("CreatePage", module).add("CreatePage", () => {
  const [dateValue, dateSetValue] = React.useState("2019-07-22");
  const [reasonValue, reasonSetValue] = React.useState("寝坊");
  const createData = {
    title: "新規申請",
    userName: "芳賀樹生",
    dateValue: dateValue,
    dateOnChange: dateSetValue,
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
