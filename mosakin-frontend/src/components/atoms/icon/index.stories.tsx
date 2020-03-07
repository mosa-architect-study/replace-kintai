import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from ".";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";

storiesOf("atoms/Icon", module).add("Icon", () => (
  <div>
    <IconBackColor>
      <Icon name="calendar" width="l" height="l"></Icon>
      <Icon name="file" width="l" height="l"></Icon>
      <Icon name="folder" width="l" height="l"></Icon>
      <Icon name="lock" width="l" height="l"></Icon>
      <Icon name="logout" width="l" height="l"></Icon>
      <Icon name="pen" width="l" height="l"></Icon>
      <Icon name="user" width="l" height="l"></Icon>
    </IconBackColor>
    <Icon name="pencilThin" width="l" height="l"></Icon>
    <Icon name="xMark" width="l" height="l"></Icon>
    <Icon name="pageTitle" width="l" height="l"></Icon>
  </div>
));

const IconBackColor = styled.div`
  background-color: ${paletteDict.base};
`;
