import { Caption } from ".";
import React from "react";

export default {
  title: "Caption"
};

export const size1 = (): JSX.Element => <Caption size="1">Caption 1</Caption>;

export const size2 = (): JSX.Element => <Caption size="2">Caption 2</Caption>;

export const size3 = (): JSX.Element => <Caption size="3">Caption 3</Caption>;
