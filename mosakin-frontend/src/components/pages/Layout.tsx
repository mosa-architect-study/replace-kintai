import React from "react";
import { useLoginInfo } from "@/context/LoginContext";
import { User } from "@/models/User";
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
      />
      {children}
      <LayoutFooter user={loginstatus.user} />
    </>
  );
};

interface LayoutHeaderProps {
  user: User;
  onLogoutClick: () => void;
}
interface LayoutFooterProps {
  user: User;
}

const menus: Menu[] = [
  {
    manuId: "",
    menuItem: "有給取得一覧",
    iconName: "file"
  },
  {
    manuId: "new",
    menuItem: "新規申請",
    iconName: "pen"
  }
];
const adminMenus: AdminMenu[] = [
  {
    adminMenuId: "admin",
    adminMenuItem: "(全)有給取得一覧",
    adminIconName: "folder"
  }
];

const LayoutHeader: React.FC<LayoutHeaderProps> = ({ user, onLogoutClick }) => {
  return (
    <>
      <PcNavigationBar
        menus={menus}
        adminMenus={adminMenus}
        adminFlg={user.role}
        user={user}
        onClick={onLogoutClick}
      />
      <SpHeader adminFlg={user.role} user={user} onClick={onLogoutClick} />
    </>
  );
};

const LayoutFooter: React.FC<LayoutFooterProps> = ({ user }) => {
  return (
    <>
      <SpNavigationBar
        menus={menus}
        adminMenus={adminMenus}
        adminFlg={user.role}
      />
    </>
  );
};
