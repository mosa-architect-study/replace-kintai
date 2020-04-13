import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { PcNavigationBar } from "./index";

//TODO: 文字被らないようにするには
storiesOf("organisms/NavigationBar", module).add("PcNavigationBar", () => {
  const A = () => {
    return (
      <>
        <p>
          <br />
          <br />
          <br />
          <br />
          新規申請がくるよ
        </p>
      </>
    );
  };
  const B = () => {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <p>有給取得一覧がくるよ</p>
      </>
    );
  };
  const C = () => {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <p>全ユーザ有給取得一覧がくるよ</p>
      </>
    );
  };
  return (
    <>
      <Router>
        <PcNavigationBar
          menus={[
            {
              id: "a",
              menuItem: "新規申請",
              iconName: "pen"
            },
            {
              id: "b",
              menuItem: "有給取得一覧",
              iconName: "file"
            },
            {
              id: "c",
              menuItem: "(全)有給取得一覧",
              iconName: "folder"
            }
          ]}
        />
        <Switch>
          <Route path="/a" component={A} />
          <Route path="/b" component={B} />
          <Route path="/c" component={C} />
        </Switch>
      </Router>
      spモードにしたら消えます
    </>
  );
});
