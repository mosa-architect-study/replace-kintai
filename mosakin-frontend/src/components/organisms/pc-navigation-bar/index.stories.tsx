import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PcNavigationBar } from "./index";
import { User } from "@/models/User";

const user1: User = { name: "ユーザ名1", photoURL: "", role: "COMMON" };
const user2: User = { name: "ユーザ名2", photoURL: "", role: "ADMIN" };

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

storiesOf("organisms/NavigationBar", module).add("PcNavigationBar", () => {
  return (
    <>
      <Router>
        <PcNavigationBar
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
          user={user1}
          adminFlg={user1.role}
          onClick={action("clicked: logout")}
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

storiesOf("organisms/NavigationBar", module).add(
  "PcNavigationBar(admin)",
  () => {
    return (
      <>
        <Router>
          <PcNavigationBar
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
            user={user2}
            adminFlg={user2.role}
            onClick={action("clicked: logout")}
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
  }
);
