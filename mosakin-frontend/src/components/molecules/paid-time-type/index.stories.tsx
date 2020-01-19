import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidTimeType } from ".";

storiesOf("molecules/PaidTimeType", module).add("PaidTimeType", () => {
  const [value, setValue] = React.useState("ALL-DAY");
  return (
    <div>
      <PaidTimeType value={value} onClick={setValue}></PaidTimeType>
    </div>
  );
});
