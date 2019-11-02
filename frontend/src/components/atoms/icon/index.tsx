import React from "react";
import styled from "@emotion/styled";
import { IconProps, IconSizeDict, IconListDict } from "./constant";

const StyledWrapper = styled.div`
  display: inline-block;
`;

const StyledIcon = styled.img`
  width: ${IconSizeDict["l"]};
  height: ${IconSizeDict["l"]};
  @media (max-width: 480px) {
    width: ${IconSizeDict["s"]};
    height: ${IconSizeDict["s"]};
  }
`;

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { name } = props;
  return (
    <StyledWrapper>
      <StyledIcon src={IconListDict[name]} alt={name}></StyledIcon>
    </StyledWrapper>
  );
};

export { Icon };
