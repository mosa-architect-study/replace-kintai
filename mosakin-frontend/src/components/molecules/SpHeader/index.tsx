import React from "react";
import styled from "@emotion/styled";
import { UserIcon } from "@/components/atoms/userIcon";
import { paletteDict } from "@/common/theme";
import { Icon } from "@/components/atoms/icon";

export const SpHeader = () => {
  return (
    <SpHeaderWrapper>
      <IconWrapper>
        <Icon height="l" width="l" name="mosakin" />
      </IconWrapper>
      <UserIconWrapper>
        <UserIcon />
      </UserIconWrapper>
    </SpHeaderWrapper>
  );
};

const SpHeaderWrapper = styled.div`
  display: flex;
  height: 70px;
  padding: 0 5%;
  background-color: ${paletteDict.base};
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserIconWrapper = styled.div`
  display: flex;
  line-height: 0;
  align-items: center;
`;
