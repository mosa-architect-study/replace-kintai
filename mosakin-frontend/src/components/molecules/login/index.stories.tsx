import React from "react";
import { Login } from ".";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("molecules/Login", module).add("Login", () => {
  return <Login onClick={action("clicked: login")} />;
});
