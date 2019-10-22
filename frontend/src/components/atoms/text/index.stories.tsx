import { Text } from ".";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Text"
};

export const size1 = (): JSX.Element => (
  <Text size="1" onClick={action("clicked")}>
    Text 1
  </Text>
);

export const size2 = (): JSX.Element => (
  <Text size="2" onClick={action("clicked")}>
    Text 2
  </Text>
);

export const size3 = (): JSX.Element => (
  <Text size="3" onClick={action("clicked")}>
    Text 3
  </Text>
);
