import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from ".";

storiesOf("Icon", module).add("icon", () => (
  <div>
    <Icon name="calendar" size="l"></Icon>
    <Icon name="calendar" size="s"></Icon>
    <Icon name="file" size="l"></Icon>
    <Icon name="folder" size="l"></Icon>
    <Icon name="lock" size="l"></Icon>
    <Icon name="logout" size="l"></Icon>
    <Icon name="pen" size="l"></Icon>
    <Icon name="pencilThin" size="l"></Icon>
    <Icon name="user" size="l"></Icon>
    <Icon name="xMark" size="l"></Icon>
  </div>
));
