import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PaidListRowContents } from ".";
import { paidList } from "@/models/models/paidList/mock";

storiesOf("molecules/PaidListRowContents", module).add(
  "PaidListRowContents",
  () => {
    return (
      <PaidListRowContents
        paid={paidList[0]}
        menu={{
          onDeleteButtonClick: action("onDeleteButtonClick"),
          onEditButtonClick: action("onEditButtonClick")
        }}
      />
    );
  }
);
