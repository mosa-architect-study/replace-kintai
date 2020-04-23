import React from "react";
import { storiesOf } from "@storybook/react";
import { SelectBox } from ".";

const list = [
  {
    label: "2020",
    value: "0"
  },
  {
    label: "令和2年度",
    value: "1"
  },
  {
    label: "全て",
    value: "2"
  }
];

storiesOf("atoms/SelectBox", module).add("SelectBox", () => {
  const [value, setValue] = React.useState("2");

  return (
    <div style={{ margin: "5px" }}>
      <SelectBox list={list} selectVal={value} onChange={setValue} />
    </div>
  );
});
