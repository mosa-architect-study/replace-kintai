import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import * as Constant from "./constant";
import { Text } from "../../atoms/text";
import { Icon } from "../../atoms/icon";
import { paletteDict } from "@/common/theme";
import { IconList } from "../../atoms/icon/constant";
import { Logout } from "./sample";

interface PullDownProps {
  color: Constant.PullDownFontColorType;
  backgroundColor: Constant.PullDownBackColorType;
}

export type Menus = {
  id: string;
  menuItem: string;
  iconName: IconList;
};

export const users = {
  userName: "ユーザ1"
};

export const menus: Menus[] = [
  {
    id: "login",
    menuItem: "ログアウト",
    iconName: "logout"
  }
];

export const PullDown = (): JSX.Element => {
  return (
    <>
      <Router>
        <PullDownItem />
        <Switch>
          <Route
            exact
            path="/login"
            component={(): JSX.Element => <Logout />}
          />
        </Switch>
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledPullDownUser = styled.div`
  width: 259px;
  height: 57px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px 3px 0px 0px;
  @media (max-width: 480px) {
    width: 433px;
    height: 66px;
    border-radius: 0px;
  }
`;

const PullDownUser = styled(StyledPullDownUser)<PullDownProps>`
  color: ${({ color }) => paletteDict[Constant.PullDownFontColor[color]]};
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
`;

const PullDownUserItem = (props: { value: string }): JSX.Element => {
  return (
    <>
      <PullDownUser color="1" backgroundColor="1">
        <Text size="1" color="2">
          {props.value}
        </Text>
      </PullDownUser>
    </>
  );
};

const StyledPullDownMenu = styled.li`
  width: 259px;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 15%;
  border-radius: 3px;
  @media (max-width: 480px) {
    width: 433px;
    height: 64px;
    padding: 0 25%;
  }
  &:hover {
    background-color: ${paletteDict.accent};
    transition-duration: 0.5s;
  }
`;

const PullDownMenu = styled(StyledPullDownMenu)<PullDownProps>`
  color: ${({ color }) => paletteDict[Constant.PullDownFontColor[color]]};
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
`;

const PullDownMenuItem = (props: {
  value: string;
  name: IconList;
}): JSX.Element => {
  return (
    <>
      <PullDownMenu color="1" backgroundColor="1">
        <PullDownIconWrapper>
          <Icon name={props.name} width="s" height="m" />
        </PullDownIconWrapper>
        <Text size="1" color="2">
          {props.value}
        </Text>
      </PullDownMenu>
    </>
  );
};

const PullDownWrapper = styled.div`
  background-color: ${paletteDict.base};
  width: 259px;
  border-radius: 3px;
  list-style: none;
  @media (max-width: 480px) {
    width: 433px;
    height: 195px;
  }
`;

const PullDownIconWrapper = styled.div`
  padding-right: 7%;
  line-height: 0;
`;

const PullDownBorder = styled.div`
  width: 259px;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    width: 433px;
  }
  &:before {
    content: "";
    background: ${paletteDict.white};
    height: 1px;
    width: 85%;
    bottom: 0;
  }
`;
