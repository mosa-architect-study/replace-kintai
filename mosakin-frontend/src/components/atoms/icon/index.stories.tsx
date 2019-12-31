import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from ".";

storiesOf("Icon", module).add("icon", () => (
  <div>
    <Icon name="calendar"></Icon>
    <Icon name="file"></Icon>
    <Icon name="folder"></Icon>
    <Icon name="lock"></Icon>
    <Icon name="logout"></Icon>
    <Icon name="pen"></Icon>
    <Icon name="pencilThin"></Icon>
    <Icon name="user"></Icon>
    <Icon name="xMark"></Icon>
    <Icon name="pageTitle"></Icon>
  </div>
));
