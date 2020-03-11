import { Button } from ".";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Text } from "../text/index";

storiesOf("atoms/Button", module).add("Button", () => {
  return (
    <div>
      <Button
        backgroundColor="1"
        width="s"
        height="s"
        color="white"
        onClick={action("clicked: button")}
      >
        <Text color="white" size="1">
          ボタン
        </Text>
      </Button>

      <Button
        backgroundColor="2"
        width="l"
        height="l"
        color="base"
        onClick={action("clicked: button2")}
      >
        <Text color="base" size="1">
          ボタン2
        </Text>
      </Button>
    </div>
  );
});
