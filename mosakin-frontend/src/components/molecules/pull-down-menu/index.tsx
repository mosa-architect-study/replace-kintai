import React from "react";
import styled from "@emotion/styled";
import * as Constant from "./constant";
import { Text } from "@/components/atoms/text";
import { Icon } from "@/components/atoms/icon";
import { paletteDict, bp } from "@/common/theme";
import { IconList } from "@/components/atoms/icon/constant";
import { User, UserRole } from "@/models/models/User";
interface PullDownProps {
  color: Constant.PullDownFontColorType;
  backgroundColor: Constant.PullDownBackColorType;
}

interface MenusProps {
  menus: Menus[];
}

export interface Menus {
  menuId: string;
  menuItem: string;
  iconName: IconList;
  onClick?: () => void;
}

export const PullDownMenuList: React.FC<MenusProps> = ({ menus }) => {
  const menuItemList = menus.map((menu: Menus) => (
    <div key={menu.menuId}>
      <StyledLink
        onClick={e => {
          e.preventDefault();
          menu.onClick && menu.onClick();
        }}
      >
        <PullDownMenu
          key={menu.menuId}
          value={menu.menuItem}
          name={menu.iconName}
        />
      </StyledLink>
    </div>
  ));
  return <ul>{menuItemList}</ul>;
};

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledPullDownUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 259px;
  height: 57px;
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

interface PullDownUserProps {
  value: string;
  adminFlg: UserRole;
}

export const PullDownUser: React.FC<PullDownUserProps> = ({
  value,
  adminFlg
}) => {
  return (
    <>
      <PullDownUserItem color="1" backgroundColor="1">
        <Text size="1">
          {value}
          {adminFlg === "ADMIN" && <>(Admin)</>}
        </Text>
      </PullDownUserItem>
      <PullDownBorder />
    </>
  );
};

const StyledPullDownMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
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

interface PullDownMenuProps {
  value: string;
  name: IconList;
}

const PullDownMenu: React.FC<PullDownMenuProps> = ({ value, name }) => {
  return (
    <>
      <PullDownMenuItem color="1" backgroundColor="1">
        <PullDownIconWrapper>
          <Icon name={name} width="s" height="m" />
        </PullDownIconWrapper>
        <Text size="1">{value}</Text>
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
    border-radius: 0px;
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
    width: 217px;
    bottom: 0;
    background: ${paletteDict.white};
    @media (max-width: ${bp}) {
      width: 363px;
    }
  }
`;

interface HeaderPullDownProps {
  user: User;
  onClick: () => void;
}

// SqHeaderとPcNavigationBarで使用してる。置き場所ここでいいかはわからない
export const HeaderPullDown: React.FC<HeaderPullDownProps> = ({
  user,
  onClick
}) => {
  return (
    <>
      <PullDownWrapper>
        <PullDownUser value={user.name} adminFlg={user.role} />
        <PullDownMenuList
          menus={[
            {
              menuId: "logout",
              menuItem: "ログアウト",
              iconName: "logout",
              onClick: () => {
                onClick();
              }
            }
          ]}
        />
      </PullDownWrapper>
    </>
  );
};
