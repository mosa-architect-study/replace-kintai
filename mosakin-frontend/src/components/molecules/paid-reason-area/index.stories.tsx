import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidReasonArea } from ".";

storiesOf("molecules/PaidReasonArea", module).add("PaidReasonArea", () => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <PaidReasonArea value={value} onChange={setValue}></PaidReasonArea>
    </div>
  );
});
