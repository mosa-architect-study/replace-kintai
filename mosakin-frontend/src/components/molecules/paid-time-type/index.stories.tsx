import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidTimeType } from ".";

storiesOf("PaidTimeArea", module).add("PaidTimeArea", () => {
  const [value, setValue] = React.useState("all-day");
  return (
    <div>
      <PaidTimeType value={value} onClick={setValue}></PaidTimeType>
    </div>
  );
});
