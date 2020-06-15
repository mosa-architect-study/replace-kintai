import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PaidListRow } from ".";
import { paidList } from "@/models/paidList/mock";

storiesOf("molecules/PaidListRow", module).add("PaidListRow", () => {
  return (
    <PaidListRow
      paid={paidList[0]}
      menu={{
        onDeleteButtonClick: action("onDeleteButtonClick"),
        onEditButtonClick: action("onEditButtonClick"),
      }}
    />
  );
});
