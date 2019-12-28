import React from "react";
import { storiesOf } from "@storybook/react";
import { CommonUserNameArea } from ".";

storiesOf("CommonUserNameArea", module).add("CommonUserNameArea", () => {
  const value = "芳賀樹生";
  return (
    <div>
      <CommonUserNameArea value={value}></CommonUserNameArea>
    </div>
  );
});
