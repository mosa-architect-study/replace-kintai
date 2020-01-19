import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import * as Constant from "./constant";
import { Text } from "@/components/atoms/text";
import { Icon } from "@/components/atoms/icon";
import { paletteDict } from "@/common/theme";
import { IconList } from "@/components/atoms/icon/constant";
import { LoginPage } from "@/components/pages/LoginPage";

interface PullDownProps {
  color: Constant.PullDownFontColorType;
  backgroundColor: Constant.PullDownBackColorType;
}

type MenusProps = {
  menus: Menus[];
};

type Menus = {
  id: string;
  menuItem: string;
  iconName: IconList;
};

const menus: Menus[] = [
  {
    id: "login",
    menuItem: "ログアウト",
    iconName: "logout"
  }
];

const users = {
  userName: "ユーザ1"
};

export const PullDown = () => {
  return (
    <>
      <Router>
        <PullDownItem />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
};

const PullDownItem = () => {
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

const PullDownMenuItemList: React.FC<MenusProps> = ({ menus }) => {
  const menuItemList = menus.map((menu: Menus) => (
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
  color: ${paletteDict.white};
  @media (max-width: 480px) {
    width: 433px;
    height: 66px;
    border-radius: 0px;
  }
`;

const PullDownUser = styled(StyledPullDownUser)<PullDownProps>`
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
`;

const PullDownUserItem = (props: { value: string }) => {
  return (
    <>
      <PullDownUser color="1" backgroundColor="1">
        <Text color="2" size="1">
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
  color: ${paletteDict.white};
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
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
`;

const PullDownMenuItem = (props: { value: string; name: IconList }) => {
  return (
    <>
      <PullDownMenu color="1" backgroundColor="1">
        <PullDownIconWrapper>
          <Icon name={props.name} width="s" height="m" />
        </PullDownIconWrapper>
        <Text color="2" size="1">
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
