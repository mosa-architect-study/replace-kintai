import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { SpNavigationBar } from "./index";

storiesOf("organisms/NavigationBar", module).add("SpNavigationBar", () => {
  const A = () => {
    return (
      <>
        <p>新規申請</p>
      </>
    );
  };
  const B = () => {
    return (
      <>
        <p>有給取得一覧</p>
      </>
    );
  };
  const C = () => {
    return (
      <>
        <p>全ユーザ有給取得一覧</p>
      </>
    );
  };
  return (
    <>
      spモードにしたら出てきます
      <Router>
        <SpNavigationBar
          menus={[
            {
              manuId: "a",
              menuItem: "新規申請",
              iconName: "pen"
            },
            {
              manuId: "b",
              menuItem: "有給取得一覧",
              iconName: "file"
            }
          ]}
          adminMenus={[
            {
              adminMenuId: "c",
              adminMenuItem: "(全)有給取得一覧",
              adminIconName: "folder"
            }
          ]}
          adminFlg={"COMMON"}
        />
        <Switch>
          <Route path="/a" component={A} />
          <Route path="/b" component={B} />
          <Route path="/c" component={C} />
        </Switch>
      </Router>
    </>
  );
});

storiesOf("organisms/NavigationBar", module).add(
  "SpNavigationBar(admin)",
  () => {
    const A = () => {
      return (
        <>
          <p>新規申請</p>
        </>
      );
    };
    const B = () => {
      return (
        <>
          <p>有給取得一覧</p>
        </>
      );
    };
    const C = () => {
      return (
        <>
          <p>全ユーザ有給取得一覧</p>
        </>
      );
    };
    return (
      <>
        spモードにしたら出てきます
        <Router>
          <SpNavigationBar
            menus={[
              {
                manuId: "a",
                menuItem: "新規申請",
                iconName: "pen"
              },
              {
                manuId: "b",
                menuItem: "有給取得一覧",
                iconName: "file"
              }
            ]}
            adminMenus={[
              {
                adminMenuId: "c",
                adminMenuItem: "(全)有給取得一覧",
                adminIconName: "folder"
              }
            ]}
            adminFlg={"ADMIN"}
          />
          <Switch>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
            <Route path="/c" component={C} />
          </Switch>
        </Router>
      </>
    );
  }
);
