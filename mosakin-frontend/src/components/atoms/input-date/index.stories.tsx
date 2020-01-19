import React from "react";
import { storiesOf } from "@storybook/react";
import { InputDate } from ".";

storiesOf("atoms/InputDate", module).add("DatePiker", () => {
  const [value, setValue] = React.useState("2019-07-22");
  return (
    <div>
      <InputDate value={value} onChange={setValue}></InputDate>
    </div>
  );
});
