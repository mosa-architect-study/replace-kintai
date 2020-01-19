import { Text } from ".";
import React from "react";

export default {
  title: "atoms/Text"
};

export const size1 = (): JSX.Element => (
  <Text color="1" size="1">
    Text 1
  </Text>
);

export const size2 = (): JSX.Element => (
  <Text color="1" size="2">
    Text 2
  </Text>
);

export const size3 = (): JSX.Element => (
  <Text color="1" size="3">
    Text 3
  </Text>
);
