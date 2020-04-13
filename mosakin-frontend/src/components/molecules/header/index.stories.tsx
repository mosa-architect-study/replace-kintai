import React from "react";
import { storiesOf } from "@storybook/react";
import { HeaderWrapper } from "./index";
import { UserIcon } from "@/components/atoms/userIcon";
import { Logo } from "@/components/atoms/logo";

storiesOf("molecules/Header", module).add("Header", () => (
  <>
    <HeaderWrapper>
      <Logo />
      <UserIcon />
    </HeaderWrapper>
  </>
));
