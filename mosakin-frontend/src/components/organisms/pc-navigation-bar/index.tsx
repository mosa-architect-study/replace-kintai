import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { paletteDict, bp } from "@/common/theme";
import { Logo } from "@/components/atoms/logo";
import { UserIcon } from "@/components/atoms/userIcon";
import { IconList } from "@/components/atoms/icon/constant";
import { HeaderWrapper } from "@/components/molecules/header";
import { NavigationMenu } from "@/components/molecules/navigation-menu";
import {
  PullDownWrapper,
  PullDownUser,
  PullDownMenuList
} from "@/components/molecules/pull-down-menu";
import { UserRole } from "@/models/models/User";

type MenuProps = {
  menus: Menu[];
  adminMenus: AdminMenu[];
  adminFlg: UserRole;
};

export type Menu = {
  manuId: string;
  menuItem: string;
  iconName: IconList;
};

export type AdminMenu = {
  adminMenuId: string;
  adminMenuItem: string;
  adminIconName: IconList;
};

export const PcNavigationBar: React.FC<MenuProps> = ({
  menus,
  adminMenus,
  adminFlg
}) => {
  const menuItemList = menus.map((menu: Menu) => (
    <StyledList key={menu.manuId}>
      <StyledLink to={`/${menu.manuId}`}>
        <NavigationMenu
          key={menu.manuId}
          value={menu.menuItem}
          name={menu.iconName}
        />
      </StyledLink>
    </StyledList>
  ));
  const adminMenuItemList = adminMenus.map((adminMenu: AdminMenu) => (
    <StyledList key={adminMenu.adminMenuId}>
      <StyledLink to={`/${adminMenu.adminMenuId}`}>
        <NavigationMenu
          key={adminMenu.adminMenuId}
          value={adminMenu.adminMenuItem}
          name={adminMenu.adminIconName}
        />
      </StyledLink>
    </StyledList>
  ));
  const [show, setShow] = useState(false);
  return (
    <ul>
      <PcNavigationBarWrapper>
        <HeaderWrapper>
          <Logo />
          {menuItemList}
          {adminFlg === "ADMIN" && <>{adminMenuItemList}</>}
          <UserIconWrapper onClick={() => setShow(!show)}>
            <UserIcon />
          </UserIconWrapper>
        </HeaderWrapper>
        <PullDownPosition>{show ? <PullDown /> : null}</PullDownPosition>
      </PcNavigationBarWrapper>
    </ul>
  );
};

const PcNavigationBarWrapper = styled.div`
  padding-bottom: 70px;
  @media (max-width: ${bp}) {
    display: none;
  }
`;

const StyledList = styled.li`
  display: inline-block;
  height: 70px;
  padding: 0 1.5%;
  &:hover {
    transition-duration: 0.5s;
    background: ${paletteDict.whitesmoke};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const UserIconWrapper = styled.button`
  outline: 0;
  :hover {
    opacity: 0.75;
    transition-duration: 0.5s;
  }
`;

const PullDownPosition = styled.div`
  position: absolute;
  right: 0;
  top: 70px;
`;

const PullDown = () => {
  const users = {
    userName: "ユーザ1"
  };
  return (
    <>
      <PullDownWrapper>
        <PullDownUser value={users.userName} />
        <PullDownMenuList
          menus={[
            {
              id: "login",
              menuItem: "ログアウト",
              iconName: "logout"
            }
          ]}
        />
      </PullDownWrapper>
    </>
  );
};
