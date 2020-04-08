import React from "react";
import { PaidListRows } from ".";
import { storiesOf } from "@storybook/react";
import { rows } from "@/models/models/paidList/mock";

storiesOf("organisms/PaidListRows", module).add("PaidListRows", () => {
  return <PaidListRows rows={rows} />;
});
