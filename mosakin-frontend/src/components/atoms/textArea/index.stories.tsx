import { TextArea } from ".";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("atoms/TextArea", module).add("TextArea", () => {
  const [value, setValue] = React.useState("");
  return <TextArea value={value} onChange={setValue}></TextArea>;
});
