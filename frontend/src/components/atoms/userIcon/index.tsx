import React from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";

interface UseIconProps {
  url?: string;
  device: "pc" | "sp";
}

interface DeviceProps {
  device: "pc" | "sp";
}

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledDevice = (props: DeviceProps): SerializedStyles => css`
  width: ${props.device === "pc" ? "50px" : "25px"};
  height: ${props.device === "pc" ? "50px" : "25px"};
`;

const StyledUserIcon = styled.img<DeviceProps>`
  display: inline-block;
  border-radius: 50%;
  background: gray;
  ${StyledDevice}
`;

const UserIcon: React.FC<UseIconProps> = (props: UseIconProps) => {
  const { url, device } = props;
  return (
    <StyledWrapper>
      {url && (
        <StyledUserIcon
          src={url}
          alt="usericon"
          device={device}
        ></StyledUserIcon>
      )}
      {!url && (
        <StyledUserIcon src="" alt="icon" device={device}></StyledUserIcon>
      )}
    </StyledWrapper>
  );
};

export default UserIcon;
