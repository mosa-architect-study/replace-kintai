import React from "react";
import { storiesOf } from "@storybook/react";
import { UserIcon } from ".";

storiesOf("UseIcon", module).add("user icon", () => (
  <div>
    <UserIcon size="l"></UserIcon>
    <UserIcon size="s"></UserIcon>
  </div>
));
