import React from "react";
import { storiesOf } from "@storybook/react";
import { ErrorBox } from ".";

const errs = [
  {
    content: "エラーです",
  },
  {
    content: "エラーです２",
  },
];

storiesOf("molecules/ErrorBox", module).add("ErrorBox", () => {
  return (
    <div>
      <div>
        <ErrorBox errors={errs}></ErrorBox>
      </div>
      <div>
        <div>エラーがない場合は表示されない↓</div>
        <ErrorBox errors={[]}></ErrorBox>
      </div>
    </div>
  );
});
