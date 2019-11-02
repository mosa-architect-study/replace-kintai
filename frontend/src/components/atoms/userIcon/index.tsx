import React from "react";
import styled from "@emotion/styled";
import { IconListDict } from "../icon/constant";
import { IconProps, userIconSizeDict } from "./constant";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledUserIcon = styled.img<IconProps>`
  display: inline-block;
  border-radius: 50%;
  background: white;
  border: solid 1px;
  width: ${({ size }): string => userIconSizeDict[size]};
  height: ${({ size }): string => userIconSizeDict[size]};
`;

const UserIcon: React.FC<IconProps> = (props: IconProps) => {
  const { url, size } = props;
  return (
    <StyledWrapper>
      {url && (
        <StyledUserIcon src={url} alt="usericon" size={size}></StyledUserIcon>
      )}
      {!url && (
        <StyledUserIcon
          src={IconListDict["user"]}
          alt="icon"
          size={size}
        ></StyledUserIcon>
      )}
    </StyledWrapper>
  );
};

export default UserIcon;
