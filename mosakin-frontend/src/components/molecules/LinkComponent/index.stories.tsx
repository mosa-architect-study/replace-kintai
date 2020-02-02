import React from "react";
import { storiesOf } from "@storybook/react";
import { IconLink } from ".";
import { MemoryRouter as Router, Route } from "react-router-dom";

storiesOf("molecules/IconLink", module).add("IconLink", () => {
  const UpdatePage = () => {
    return (
      <>
        <p>とりあえずの編集</p>
      </>
    );
  };
  const DeletePage = () => {
    return (
      <>
        <p>とりあえずの削除</p>
      </>
    );
  };
  return (
    <>
      <Router>
        <IconLink to="./update" name="pencilThin" />
        <IconLink to="./delete" name="xMark" />
        <Route path="/update" component={UpdatePage} />
        <Route path="/delete" component={DeletePage} />
      </Router>
    </>
  );
});
