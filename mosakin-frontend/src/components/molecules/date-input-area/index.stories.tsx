import React from "react";
import { storiesOf } from "@storybook/react";
import { DateInputArea } from ".";

storiesOf("DateInputArea", module).add("DateInputArea", () => {
  const [value, setValue] = React.useState("2019-07-22");
  return (
    <div>
      <DateInputArea value={value} onChange={setValue}></DateInputArea>
    </div>
  );
});
