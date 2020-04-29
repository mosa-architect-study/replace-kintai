import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidNumberUpdatePage } from ".";
import { action } from "@storybook/addon-actions";

storiesOf("templates/PaidNumberUpdatePage", module).add(
  "PaidNumberUpdatePage",
  () => {
    const [carryForward, SetCarryForward] = React.useState(10);
    const [annualPaidNumber, SetAnnualPaidNumber] = React.useState(5);

    const userData = {
      name: "腹へった〜",
      carryForward,
      annualPaidNumber
    };

    return (
      <PaidNumberUpdatePage
        userData={userData}
        onCancel={action("Click: Cancel")}
        onSubmit={action("Click: Submit")}
        carryForwardOnChange={SetCarryForward}
        annualPaidNumberOnChange={SetAnnualPaidNumber}
      ></PaidNumberUpdatePage>
    );
  }
);
