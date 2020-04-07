import React from "react";
import { PaidListRow } from ".";
import { storiesOf } from "@storybook/react";
import { rows } from "@/models/models/paidList/mock";

storiesOf("organisms/PaidListRow", module).add("PaidList", () => {
  return <PaidListRow rows={rows} />;
});
