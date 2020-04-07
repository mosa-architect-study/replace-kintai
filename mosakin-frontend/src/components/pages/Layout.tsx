import React from "react";
import { Logo } from "../atoms/logo";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";
import { useLoginInfo } from "@/hooks/useLoginStatus";
import { Button } from "../atoms/button";
import { Text } from "../atoms/text";
import { User } from "@/models/models/User";

const HeaderFixme = () => (
  <IconBackColor>
    <Logo></Logo>
  </IconBackColor>
);

const IconBackColor = styled.div`
  background-color: ${paletteDict.base};
`;

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
  return (
    <>
      <HeaderFixme></HeaderFixme>
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
    </>
  );
};
