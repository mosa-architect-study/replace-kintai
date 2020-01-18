import React from "react";
import { storiesOf } from "@storybook/react";
import { Toggles, TogglesOption } from ".";

type PaidType = "all-day" | "am" | "pm";
const options: TogglesOption<PaidType>[] = [
  {
    value: "all-day",
    label: "全日",
    size: "1"
  },
  {
    value: "am",
    label: "午前",
    size: "1"
  },
  {
    value: "pm",
    label: "午後",
    size: "1"
  }
];

storiesOf("Toggles", module).add("Toggles", () => {
  const [value, setState] = React.useState<PaidType>("all-day");
  return (
    <Toggles<PaidType>
      options={options}
      value={value}
      onClick={setState}
    ></Toggles>
  );
});
