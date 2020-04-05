import React from "react";
import { storiesOf } from "@storybook/react";
import { Logo } from ".";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";

storiesOf("atoms/Logo", module).add("Logo", () => (
  <IconBackColor>
    <Logo></Logo>
  </IconBackColor>
));

const IconBackColor = styled.div`
  background-color: ${paletteDict.base};
`;
