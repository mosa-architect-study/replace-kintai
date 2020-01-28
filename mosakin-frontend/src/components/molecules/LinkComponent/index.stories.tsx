import React from "react";
import { storiesOf } from "@storybook/react";
import { LinkComponent, Routes } from ".";
import { BrowserRouter as Router } from "react-router-dom";

storiesOf("molecules/LinkComponent", module).add("LinkComponent", () => (
  <>
    <Router>
      <LinkComponent to="./edit" name="pencilThin" />
      <LinkComponent to="./delete" name="xMark" />
      <Routes />
    </Router>
  </>
));
