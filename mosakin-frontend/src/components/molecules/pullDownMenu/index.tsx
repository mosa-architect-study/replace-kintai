import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import * as Constant from "./constant";
import { Text } from "@/components/atoms/text";
import { Icon } from "@/components/atoms/icon";
import { paletteDict, bp } from "@/common/theme";
import { IconList } from "@/components/atoms/icon/constant";

interface PullDownProps {
  color: Constant.PullDownFontColorType;
  backgroundColor: Constant.PullDownBackColorType;
}

type MenusProps = {
  menus: Menus[];
};

export type Menus = {
  id: string;
  menuItem: string;
  iconName: IconList;
};

export const PullDownMenuList: React.FC<MenusProps> = ({ menus }) => {
  const menuItemList = menus.map((menu: Menus) => (
    <li key={menu.id}>
      <StyledLink to={`/${menu.id}`}>
        <PullDownMenu
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 259px;
  height: 57px;
  list-style: none;
  border-radius: 3px 3px 0px 0px;
  color: ${paletteDict.white};
  @media (max-width: ${bp}) {
    width: 433px;
    height: 66px;
    border-radius: 0px;
  }
`;

const PullDownUserItem = styled(StyledPullDownUser)<PullDownProps>`
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
`;

export const PullDownUser = (props: { value: string }) => {
  return (
    <>
      <PullDownUserItem color="1" backgroundColor="1">
        <Text size="1">{props.value}</Text>
      </PullDownUserItem>
      <PullDownBorder />
    </>
  );
};

const StyledPullDownMenu = styled.li`
  display: flex;
  align-items: center;
  width: 259px;
  height: 46px;
  padding: 0 15%;
  border-radius: 3px;
  color: ${paletteDict.white};
  @media (max-width: ${bp}) {
    width: 433px;
    height: 64px;
    padding: 0 25%;
  }
  &:hover {
    background-color: ${paletteDict.whitesmoke};
    transition-duration: 0.5s;
  }
`;

const PullDownMenuItem = styled(StyledPullDownMenu)<PullDownProps>`
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
`;

const PullDownMenu = (props: { value: string; name: IconList }) => {
  return (
    <>
      <PullDownMenuItem color="1" backgroundColor="1">
        <PullDownIconWrapper>
          <Icon name={props.name} width="s" height="m" />
        </PullDownIconWrapper>
        <Text size="1">{props.value}</Text>
      </PullDownMenuItem>
    </>
  );
};

export const PullDownWrapper = styled.div`
  background-color: ${paletteDict.base};
  width: 259px;
  border-radius: 3px;
  list-style: none;
  @media (max-width: ${bp}) {
    width: 433px;
  }
`;

const PullDownIconWrapper = styled.div`
  padding-right: 7%;
  line-height: 0;
`;

const PullDownBorder = styled.div`
  display: flex;
  justify-content: center;
  &:before {
    content: "";
    height: 1px;
    width: 85%;
    bottom: 0;
    background: ${paletteDict.white};
  }
`;
