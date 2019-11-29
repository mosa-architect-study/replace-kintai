import React from "react";
import { storiesOf } from "@storybook/react";
import { Toggle } from ".";
import { action } from "@storybook/addon-actions";

storiesOf("Toggle", module).add("Toggle", () => {
  return (
    <div>
      <Toggle
        value="全日"
        group="group1"
        size="1"
        onClick={action("全日")}
      ></Toggle>
      <Toggle
        value="午前"
        group="group1"
        size="1"
        onClick={action("午前")}
      ></Toggle>
      <Toggle
        value="午後"
        group="group1"
        size="1"
        onClick={action("午後")}
      ></Toggle>
    </div>
  );
});
