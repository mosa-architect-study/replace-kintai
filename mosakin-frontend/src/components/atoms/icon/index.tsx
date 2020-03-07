import React from "react";
import styled from "@emotion/styled";
import {
  IconProps,
  IconSizeProps,
  PcIconSizeDict,
  SpIconSizeDict,
  IconListDict
} from "./constant";

const StyledWrapper = styled.div`
  display: inline-block;
  font-size: 0;
`;

const StyledIcon = styled.img<IconSizeProps>`
  width: ${({ width }): string => PcIconSizeDict[width]};
  height: ${({ height }): string => PcIconSizeDict[height]};
  @media (max-width: 480px) {
    width: ${({ width }): string => SpIconSizeDict[width]};
    height: ${({ height }): string => SpIconSizeDict[height]};
  }
`;

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { name } = props;
  return (
    <StyledWrapper>
      <StyledIcon
        src={IconListDict[name]}
        alt={name}
        width={props.width}
        height={props.height}
      ></StyledIcon>
    </StyledWrapper>
  );
};

export { Icon };
