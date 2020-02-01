import React from "react";
import { storiesOf } from "@storybook/react";
import { LinkComponent } from ".";
import { MemoryRouter as Router, Route } from "react-router-dom";

storiesOf("molecules/LinkComponent", module).add("LinkComponent", () => {
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
        <LinkComponent to="./edit" name="pencilThin" />
        <LinkComponent to="./delete" name="xMark" />
        <Route path="/update" component={UpdatePage} />
        <Route path="/delete" component={DeletePage} />
      </Router>
    </>
  );
});
