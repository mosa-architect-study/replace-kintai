import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { storiesOf } from "@storybook/react";
import {
  PullDownUserItem,
  PullDownMenuItem,
  PullDownWrapper,
  PullDownBorder,
  StyledLink
} from ".";
import { IconList } from "../../atoms/icon/constant";

storiesOf("PullDown", module).add("PullDown", () => (
  <>
    <PullDown />
  </>
));

type Menus = {
  id: string;
  menuItem: string;
  iconName: IconList;
};

const users = {
  userName: "ユーザ1"
};

const menus: Menus[] = [
  {
    id: "path1",
    menuItem: "パスワード変更",
    iconName: "lock"
  },
  {
    id: "path2",
    menuItem: "ログアウト",
    iconName: "logout"
  }
];

const PullDown = (): JSX.Element => {
  return (
    <>
      <Router>
        <PullDownItem />
        <PullDownRoutes />
      </Router>
    </>
  );
};

const PullDownItem = (): JSX.Element => {
  return (
    <>
      <PullDownWrapper>
        <PullDownUserItem value={users.userName} />
        <PullDownBorder />
        <PullDownMenuItemList menus={menus} />
      </PullDownWrapper>
    </>
  );
};

const PullDownMenuItemList = (props: { menus: Menus[] }): JSX.Element => {
  const menuItemList = props.menus.map((menu: Menus) => (
    <li key={menu.id}>
      <StyledLink to={`/${menu.id}`}>
        <PullDownMenuItem
          key={menu.id}
          value={menu.menuItem}
          name={menu.iconName}
        />
      </StyledLink>
    </li>
  ));
  return <ul>{menuItemList}</ul>;
};

const PullDownRoutes = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/path1" component={(): JSX.Element => <Menu1 />} />
        <Route path="/path2" component={(): JSX.Element => <Menu2 />} />
      </Switch>
    </>
  );
};

const Menu1 = (): JSX.Element => {
  const location = useLocation();
  return (
    <>
      <h2>PullDownMenu1</h2>
      <p>{`pathname: ${location.pathname}`}</p>
    </>
  );
};

const Menu2 = (): JSX.Element => {
  const location = useLocation();
  return (
    <>
      <h2>PullDownMenu2</h2>
      <p>{`pathname: ${location.pathname}`}</p>
    </>
  );
};
