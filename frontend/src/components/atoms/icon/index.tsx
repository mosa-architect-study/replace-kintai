import React from "react";
import styled from "@emotion/styled";
import {
  IconProps,
  IconSizeProps,
  iconSizeDict,
  IconListDict
} from "./constant";

const StyledWrapper = styled.div`
  display: inline-block;
`;

const StyledIcon = styled.img<IconSizeProps>`
  width: ${({ size }): string => iconSizeDict[size]};
  height: ${({ size }): string => iconSizeDict[size]};
`;

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { size, name } = props;
  return (
    <StyledWrapper>
      <StyledIcon src={IconListDict[name]} alt={name} size={size}></StyledIcon>
    </StyledWrapper>
  );
};

export { Icon };
