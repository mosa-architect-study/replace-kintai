import React from "react";
import { storiesOf } from "@storybook/react";
import { Toggles } from ".";

storiesOf("Toggles", module).add("Toggles", () => {
  const [value, setState] = React.useState("all-day");
  return (
    <Toggles
      options={[
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
      ]}
      value={value}
      onClick={setState}
    ></Toggles>
  );
});
