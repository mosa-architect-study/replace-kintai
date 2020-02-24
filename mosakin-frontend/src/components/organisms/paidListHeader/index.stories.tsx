import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidListHeader } from ".";
import styled from "@emotion/styled";

const Content = styled.div`
  width: 500px;
`;

storiesOf("organisms/PaidListHeader", module).add("header", () => (
  <Content>
    <PaidListHeader
      annualPaidNumber={10}
      currentPaidAcquisitionNumber={5}
      leftPaidNumber={5}
      carryForward={0}
    ></PaidListHeader>
  </Content>
));
