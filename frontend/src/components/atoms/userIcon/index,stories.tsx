import React from "react";
import { storiesOf } from "@storybook/react";
import UserIcon from ".";

storiesOf("UseIcon", module).add("user icon", () => (
  <div>
    <UserIcon device="pc"></UserIcon>
    <UserIcon device="sp"></UserIcon>
  </div>
));
