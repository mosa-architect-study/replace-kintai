import React from "react";
import styled from "@emotion/styled";
import { bp } from "@/common/theme";
import { HeaderWrapper } from "@/components/molecules/header";
import { UserIcon } from "@/components/atoms/userIcon";
import { Logo } from "@/components/atoms/logo";

export const SpHeader = () => (
  <SpHeaderWrapper>
    <HeaderWrapper>
      <Logo />
      <UserIcon />
    </HeaderWrapper>
  </SpHeaderWrapper>
);

const SpHeaderWrapper = styled.div`
  display: none;
  @media (max-width: ${bp}) {
    display: block;
    padding-bottom: 80px;
  }
`;
