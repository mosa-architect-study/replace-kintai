import React from "react";
import { storiesOf } from "@storybook/react";
import { PaidListTemplate } from ".";
import { header, rows } from "@/models/models/paidList/mock";

storiesOf("templates/ListPage", module).add("ListPage", () => {
  return (
    <PaidListTemplate
      status="Fetched"
      data={{ header, list: rows }}
    ></PaidListTemplate>
  );
});
