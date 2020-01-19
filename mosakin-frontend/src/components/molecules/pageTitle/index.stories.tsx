import React from "react";
import { storiesOf } from "@storybook/react";
import { PageTitle } from ".";

storiesOf("molecules/PageTitle", module).add("PageTitle", () => {
  return (
    <div>
      <PageTitle title={"新規申請"}></PageTitle>
    </div>
  );
});
