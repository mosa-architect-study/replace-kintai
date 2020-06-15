import React from "react";
import { MemoryRouter as Router, Route } from "react-router-dom";
import { PullDownWrapper, PullDownUser, PullDownMenuList } from "./index";
import { LoginPage } from "@/components/pages/LoginPage";
import { storiesOf } from "@storybook/react";

storiesOf("molecules/PullDown", module).add("PullDown", () => {
  const users = {
    userName: "ユーザ1",
  };
  return (
    <>
      <Router>
        <PullDownWrapper>
          <PullDownUser value={users.userName} adminFlg="COMMON" />
          <PullDownMenuList
            menus={[
              {
                menuId: "login",
                menuItem: "ログアウト",
                iconName: "logout",
              },
            ]}
          />
        </PullDownWrapper>
        <Route exact path="/login" component={LoginPage} />
      </Router>
    </>
  );
});

storiesOf("molecules/PullDown", module).add("PullDown(admin)", () => {
  const users = {
    userName: "ユーザ2",
  };
  return (
    <>
      <Router>
        <PullDownWrapper>
          <PullDownUser value={users.userName} adminFlg="ADMIN" />
          <PullDownMenuList
            menus={[
              {
                menuId: "login",
                menuItem: "ログアウト",
                iconName: "logout",
              },
            ]}
          />
        </PullDownWrapper>
        <Route exact path="/login" component={LoginPage} />
      </Router>
    </>
  );
});
