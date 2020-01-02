import React from "react";
import { storiesOf } from "@storybook/react";
import { PageTitle } from ".";

storiesOf("PageTitle", module).add("PageTitle", () => {
  return (
    <div>
      <PageTitle title={"新規申請"}></PageTitle>
    </div>
  );
});
