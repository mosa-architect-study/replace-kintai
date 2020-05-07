import React from "react";
import { storiesOf } from "@storybook/react";
import { SpHeader } from "./index";

storiesOf("organisms/Header", module).add("SpHeader", () => (
  <>
    <SpHeader />
    <p>spモードにしたらでてくる</p>
  </>
));
