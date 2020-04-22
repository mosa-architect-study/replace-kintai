import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidTable } from ".";
import { userData } from "@/models/models/paidList/mock";

storiesOf("organisms/PaidTable", module).add("PaidTable", () => {
  return <PaidTable userDate={userData} />;
});
