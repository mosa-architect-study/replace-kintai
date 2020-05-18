import React, { useState } from "react";
import styled from "@emotion/styled";
import { User, UserRole } from "@/models/models/User";
import { bp } from "@/common/theme";
import { HeaderWrapper } from "@/components/molecules/header";
import { UserIcon } from "@/components/atoms/userIcon";
import { Logo } from "@/components/atoms/logo";
import { HeaderPullDown } from "@/components/molecules/pull-down-menu";

interface SpHeaderProps {
  user: User;
  adminFlg: UserRole;
  onClick: () => void;
}

export const SpHeader: React.FC<SpHeaderProps> = ({ user, onClick }) => {
  const [show, setShow] = useState(false);
  return (
    <SpHeaderWrapper>
      <HeaderWrapper>
        <Logo />
        <UserIconWrapper onClick={() => setShow(!show)}>
          <UserIcon />
        </UserIconWrapper>
        <SpPullDownPosition>
          {show ? <HeaderPullDown user={user} onClick={onClick} /> : null}
        </SpPullDownPosition>
      </HeaderWrapper>
    </SpHeaderWrapper>
  );
};

const SpHeaderWrapper = styled.div`
  display: none;
  @media (max-width: ${bp}) {
    display: block;
    padding-bottom: 80px;
  }
`;

const SpPullDownPosition = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 80px;
`;

const UserIconWrapper = styled.button`
  outline: 0;
  :hover {
    opacity: 0.75;
    transition-duration: 0.5s;
  }
`;
