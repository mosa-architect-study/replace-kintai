import React from "react";
import styled from "@emotion/styled";
import {
  IconProps,
  pcIconSizeDict,
  spIconSizeDict,
  IconListDict
} from "./constant";

const StyledWrapper = styled.div`
  display: inline-block;
`;

// TODO: サイズ変えれるようにしたい(プルダウン, ヘッダ, テーブル)
const StyledIcon = styled.img`
  width: ${pcIconSizeDict["s"]};
  height: ${pcIconSizeDict["l"]};
  @media (max-width: 480px) {
    width: ${spIconSizeDict["s"]};
    height: ${spIconSizeDict["l"]};
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
