import React from "react";
import { storiesOf } from "@storybook/react";
import { HeaderWrapper } from "./index";
import { UserIcon } from "@/components/atoms/userIcon";
import { Icon } from "@/components/atoms/icon";

storiesOf("molecules/Header", module).add("Header", () => (
  <>
    <HeaderWrapper>
      <Icon height="l" width="l" name="mosakin" />
      <UserIcon />
    </HeaderWrapper>
  </>
));
