import { Caption } from ".";
import React from "react";

export default {
  title: "atoms/Caption"
};

export const h1 = (): JSX.Element => (
  <Caption lv="h1" color="1">
    Caption h1
  </Caption>
);

export const h2 = (): JSX.Element => (
  <Caption lv="h2" color="1">
    Caption h2
  </Caption>
);

export const h3 = (): JSX.Element => (
  <Caption lv="h3" color="1">
    Caption h3
  </Caption>
);

export const h4 = (): JSX.Element => (
  <Caption lv="h4" color="1">
    Caption h4
  </Caption>
);
