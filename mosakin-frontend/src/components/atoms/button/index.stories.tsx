import { Button } from ".";
import React from "react";
import { action } from "@storybook/addon-actions";
import { Text } from "../text/index";

export default {
  title: "Button"
};

export const Button1 = (): JSX.Element => (
  <Button backgroundColor="1" width="s" height="s" onClick={action("押した")}>
    <Text color="2" size="1">
      ボタン
    </Text>
  </Button>
);

export const Button2 = (): JSX.Element => (
  <Button backgroundColor="2" width="l" height="l" onClick={action("押した")}>
    <Text color="3" size="2">
      ボタン
    </Text>
  </Button>
);
