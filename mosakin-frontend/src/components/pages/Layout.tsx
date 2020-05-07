import React from "react";
import { useLoginInfo } from "@/context/LoginContext";
import { Button } from "../atoms/button";
import { Text } from "../atoms/text";
import { User } from "@/models/models/User";
import {
  PcNavigationBar,
  Menu,
  AdminMenu
} from "@/components/organisms/pc-navigation-bar";
import { SpNavigationBar } from "@/components/organisms/sp-navigation-bar";
import { SpHeader } from "@/components/organisms/sp-header";

export const Layout: React.FC = ({ children }) => {
  const loginstatus = useLoginInfo();
  return (
    <>
      <LayoutHeader
        user={loginstatus.user}
        onLogoutClick={loginstatus.logout}
      ></LayoutHeader>
      {children}
    </>
  );
};

interface LayoutHeaderProps {
  user: User;
  onLogoutClick: () => void;
}

const LayoutHeader: React.FC<LayoutHeaderProps> = ({ user, onLogoutClick }) => {
  const menus: Menu[] = [
    {
      manuId: "new",
      menuItem: "新規申請",
      iconName: "pen"
    },
    {
      manuId: "update",
      menuItem: "有給取得一覧",
      iconName: "file"
    }
  ];
  const adminMenus: AdminMenu[] = [
    {
      adminMenuId: "admin",
      adminMenuItem: "(全)有給取得一覧",
      adminIconName: "folder"
    }
  ];
  return (
    <>
      <PcNavigationBar
        menus={menus}
        adminMenus={adminMenus}
        adminFlg={user.role}
      />
      <SpHeader />
      <SpNavigationBar
        menus={menus}
        adminMenus={adminMenus}
        adminFlg={user.role}
      />
      <Button
        onClick={onLogoutClick}
        backgroundColor="1"
        height="s"
        width="s"
        color="white"
      >
        <Text size="1">Logout</Text>
      </Button>
      <p>こんにちは！{user.name}さん</p>
      <p>権限：{user.role}</p>
    </>
  );
};
