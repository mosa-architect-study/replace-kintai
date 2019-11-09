import { Button } from ".";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button"
};

export const Button1 = (): JSX.Element => (
  <Button color="1" backgroundColor="1" onClick={action("押した")}>
    ボタン
  </Button>
);
