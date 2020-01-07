import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidTimeArea } from ".";

storiesOf("PaidTimeArea", module).add("PaidTimeArea", () => {
  const [value, setValue] = React.useState("2019-07-22");
  return (
    <div>
      <PaidTimeArea value={value} onChange={setValue}></PaidTimeArea>
    </div>
  );
});
