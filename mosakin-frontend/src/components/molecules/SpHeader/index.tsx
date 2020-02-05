import React from "react";
import styled from "@emotion/styled";
import { UserIcon } from "@/components/atoms/userIcon";
import { paletteDict } from "@/common/theme";
import { Icon } from "@/components/atoms/icon";

export const SpHeader = () => {
  return (
    <SpHeaderWrapper>
      <Icon height="l" width="l" name="mosakin" />
      <UserIcon />
    </SpHeaderWrapper>
  );
};

const SpHeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  padding: 0 5%;
  background-color: ${paletteDict.base};
  justify-content: space-between;
  align-items: center;
  line-height: 0;
  top: 0;
`;
