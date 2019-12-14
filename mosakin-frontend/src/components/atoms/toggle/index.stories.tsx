import React from "react";
import { storiesOf } from "@storybook/react";
import { Toggle } from ".";

storiesOf("Toggle", module).add("Toggle", () => {
  return (
    <div>
      <Toggle value="全日" group="group1" size="1" selected></Toggle>
      <Toggle value="午前" group="group1" size="1" selected={false}></Toggle>
      <Toggle value="午後" group="group1" size="1" selected={false}></Toggle>
    </div>
  );
});
