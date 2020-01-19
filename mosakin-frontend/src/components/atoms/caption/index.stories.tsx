import { Caption } from ".";
import React from "react";

export default {
  title: "atoms/Caption"
};

export const h1 = (): JSX.Element => <Caption lv="h1">Caption h1</Caption>;

export const h2 = (): JSX.Element => <Caption lv="h2">Caption h2</Caption>;

export const h3 = (): JSX.Element => <Caption lv="h3">Caption h3</Caption>;

export const h4 = (): JSX.Element => <Caption lv="h4">Caption h4</Caption>;
