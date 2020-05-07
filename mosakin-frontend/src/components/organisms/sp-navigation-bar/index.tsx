import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { paletteDict, bp } from "@/common/theme";
import { NavigationMenu } from "@/components/molecules/navigation-menu/index";
import { IconList } from "@/components/atoms/icon/constant";
import { UserRole } from "@/models/models/User";

type MenuProps = {
  menus: Menu[];
  adminMenus: AdminMenu[];
  adminFlg: UserRole;
};

type Menu = {
  manuId: string;
  menuItem: string;
  iconName: IconList;
};

type AdminMenu = {
  adminMenuId: string;
  adminMenuItem: string;
  adminIconName: IconList;
};

export const SpNavigationBar: React.FC<MenuProps> = ({
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
  return (
    <ul>
      <SpNavigationBarWrapper>
        {menuItemList}
        {adminFlg === "ADMIN" && <>{adminMenuItemList}</>}
      </SpNavigationBarWrapper>
    </ul>
  );
};

const StyledList = styled.li`
  display: inline-block;
  height: 80px;
  width: 100%;
  padding: 0 1.5%;
  &:hover {
    transition-duration: 0.5s;
    background: ${paletteDict.whitesmoke};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SpNavigationBarWrapper = styled.div`
  display: none;
  @media (max-width: ${bp}) {
    display: flex;
    position: fixed;
    width: 100%;
    padding: 0 5px;
    background-color: ${paletteDict.base};
    text-align: center;
    justify-content: space-between;
    line-height: 0;
    bottom: 0;
    z-index: 1000;
  }
`;
