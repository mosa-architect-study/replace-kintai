import React from "react";
import { Postit, Wrapper } from "./index";
import { storiesOf } from "@storybook/react";

//NOTE: 残有給数->remainingPaid ユビキタスなかったからとりあえず
const paid = {
  carryForward: "1",
  annualPaidNumber: "2",
  remainingPaid: "3",
  currentPaidAcquisitionNumber: "4"
};

storiesOf("molecules/Postit", module).add("postit", () => {
  return (
    <div>
      <Wrapper>
        <Postit title="繰越分" number={paid.carryForward} />
        <Postit title="年次有給数" number={paid.annualPaidNumber} />
        <Postit title="残有給数" number={paid.remainingPaid} />
        <Postit
          title="現有給取得数"
          number={paid.currentPaidAcquisitionNumber}
        />
      </Wrapper>
    </div>
  );
});
