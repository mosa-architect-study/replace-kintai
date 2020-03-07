import React from "react";
import styled from "@emotion/styled";
import { storiesOf } from "@storybook/react";
import { NavigationMenu } from "./index";
import { paletteDict } from "@/common/theme";

storiesOf("molecules/NavigationMenu", module).add("NavigationMenu", () => {
  return (
    <>
      <SampleBackColorNavigationMenu>
        <NavigationMenu value="spはアイコン出てくる" name="pen" />
      </SampleBackColorNavigationMenu>
    </>
  );
});

const SampleBackColorNavigationMenu = styled.div`
  background-color: ${paletteDict.base};
`;
