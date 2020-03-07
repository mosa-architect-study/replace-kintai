import React from "react";
import { Postit } from "./index";
import { storiesOf } from "@storybook/react";
import styled from "@emotion/styled";

//NOTE: 残有給数->remainingPaid ユビキタスなかったからとりあえず
const paid = {
  carryForward: "1",
  annualPaidNumber: "2",
  remainingPaid: "3",
  currentPaidAcquisitionNumber: "4"
};

const Wrapper = styled.div`
  display: flex;
`;

storiesOf("molecules/Postit", module).add("postit", () => {
  return (
    <Wrapper>
      <Postit title="繰越分" number={paid.carryForward} />
    </Wrapper>
  );
});
