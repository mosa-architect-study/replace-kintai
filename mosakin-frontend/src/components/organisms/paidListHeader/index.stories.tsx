import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidListHeader } from ".";
import { header } from "@/models/models/paidList/mock";
import styled from "@emotion/styled";

const Content = styled.div`
  width: 500px;
`;

storiesOf("organisms/PaidListHeader", module).add("Header", () => (
  <Content>
    <PaidListHeader {...header}></PaidListHeader>
  </Content>
));
