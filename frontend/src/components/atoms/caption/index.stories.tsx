import { Caption } from ".";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Caption"
};

export const size1 = (): JSX.Element => (
  <Caption size="1" onClick={action("clicked")}>
    Caption 1
  </Caption>
);

export const size2 = (): JSX.Element => (
  <Caption size="2" onClick={action("clicked")}>
    Caption 2
  </Caption>
);

export const size3 = (): JSX.Element => (
  <Caption size="3" onClick={action("clicked")}>
    Caption 3
  </Caption>
);
