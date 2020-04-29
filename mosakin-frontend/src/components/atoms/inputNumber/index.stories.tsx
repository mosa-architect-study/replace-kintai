import React from "react";
import { storiesOf } from "@storybook/react";
import { InputNumber } from ".";

storiesOf("atoms/InputNumber", module).add("InputNumber", () => {
  const [value, setValue] = React.useState(123);

  return (
    <div>
      <InputNumber value={value} onChange={setValue} />
    </div>
  );
});
