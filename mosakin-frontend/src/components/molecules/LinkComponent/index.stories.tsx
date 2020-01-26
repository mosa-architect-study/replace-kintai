import React from "react";
import { storiesOf } from "@storybook/react";
import { LinkComponent, Routes } from ".";
import { BrowserRouter as Router } from "react-router-dom";

storiesOf("molecules/LinkComponent", module).add("LinkComponent", () => (
  <>
    <Router>
      <LinkComponent href="./edit" name="pencilThin" />
      <LinkComponent href="./delete" name="xMark" />
      <Routes />
    </Router>
  </>
));
