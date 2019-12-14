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
  width: ${userIconSizeDict["l"]};
  height: ${userIconSizeDict["l"]};
  @media (max-width: 480px) {
    width: ${userIconSizeDict["s"]};
    height: ${userIconSizeDict["s"]};
  }
`;

const UserIcon: React.FC<IconProps> = (props: IconProps) => {
  const { url } = props;
  return (
    <StyledWrapper>
      {url && <StyledUserIcon src={url} alt="usericon"></StyledUserIcon>}
      {!url && (
        <StyledUserIcon src={IconListDict["user"]} alt="icon"></StyledUserIcon>
      )}
    </StyledWrapper>
  );
};

export { UserIcon };
