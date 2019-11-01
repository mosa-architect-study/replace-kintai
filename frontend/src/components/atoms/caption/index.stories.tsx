import { Caption } from ".";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Caption"
};

export const size1 = (): JSX.Element => (
  <Caption lv="h1" onClick={action("clicked")}>
    Caption 1
  </Caption>
);

export const size2 = (): JSX.Element => (
  <Caption lv="h2" onClick={action("clicked")}>
    Caption 2
  </Caption>
);

export const size3 = (): JSX.Element => (
  <Caption lv="h3" onClick={action("clicked")}>
    Caption 3
  </Caption>
);

export const size4 = (): JSX.Element => (
  <Caption lv="h4" onClick={action("clicked")}>
    Caption 4
  </Caption>
);

export const size5 = (): JSX.Element => (
  <Caption lv="h5" onClick={action("clicked")}>
    Caption 5
  </Caption>
);
