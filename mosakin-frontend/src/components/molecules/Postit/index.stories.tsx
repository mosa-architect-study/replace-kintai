import React from "react";
import { Postit } from "./index";

export default {
  title: "Postit"
};

//NOTE: 残有給数->remainingPaid ユビキタスなかったからとりあえず
const paid = {
  carryForward: "🙂",
  annualPaidNumber: "🙂",
  remainingPaid: "🙂",
  currentPaidAcquisitionNumber: "🙂"
};

export const Postit1 = (): JSX.Element => (
  <Postit value="繰越分" width="1" paid={paid.carryForward}></Postit>
);

export const Postit2 = (): JSX.Element => (
  <Postit value="年次有給数" width="2" paid={paid.annualPaidNumber}></Postit>
);

export const Postit3 = (): JSX.Element => (
  <Postit value="残有給数" width="3" paid={paid.remainingPaid}></Postit>
);

export const Postit4 = (): JSX.Element => (
  <Postit
    value="現有給取得数"
    width="4"
    paid={paid.currentPaidAcquisitionNumber}
  ></Postit>
);
