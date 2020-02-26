import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { paletteDict } from "@/common/theme";
import { NavigationMenu } from "@/components/molecules/navigation-menu/index";
import { IconList } from "@/components/atoms/icon/constant";

type MenuProps = {
  menus: Menu[];
};

type Menu = {
  id: string;
  menuItem: string;
  iconName: IconList;
};

export const SpNavigationBar: React.FC<MenuProps> = ({ menus }) => {
  const menuItemList = menus.map((menu: Menu) => (
    <StyledList key={menu.id}>
      <StyledLink to={`/${menu.id}`}>
        <NavigationMenu
          key={menu.id}
          value={menu.menuItem}
          name={menu.iconName}
        />
      </StyledLink>
    </StyledList>
  ));
  return (
    <ul>
      <SpNavigationBarWrapper>
        <BlankMenu />
        {menuItemList}
        <BlankMenu />
      </SpNavigationBarWrapper>
    </ul>
  );
};

const StyledList = styled.li`
  display: inline-block;
  height: 80px;
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
  display: flex;
  position: fixed;
  width: 100%;
  padding: 0 2.5%;
  background-color: ${paletteDict.base};
  text-align: center;
  justify-content: space-between;
  line-height: 0;
  bottom: 0;
`;

const BlankMenu = () => {
  return <div />;
};
