import { Button } from ".";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Text } from "../text/index";

storiesOf("atoms/button", module).add("button", () => {
  return (
    <div>
      <Button
        type="button"
        backgroundColor="1"
        width="s"
        height="s"
        onClick={action("clicked: button")}
      >
        <Text color="2" size="1">
          ボタン
        </Text>
      </Button>

      <Button
        type="button"
        backgroundColor="2"
        width="l"
        height="l"
        onClick={action("clicked: button2")}
      >
        <Text color="3" size="1">
          ボタン2
        </Text>
      </Button>
    </div>
  );
});
