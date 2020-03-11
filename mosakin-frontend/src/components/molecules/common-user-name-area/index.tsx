import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { Text } from "../../atoms/text";
import { paletteDict } from "@/common/theme";

export interface CommonUserNameAreaProps {
  value?: string;
}

const CaptionDiv = styled.div`
  vertical-align: middle;
`;
const TextDiv = styled.div`
  vertical-align: middle;
  width: 295px;
  color: ${paletteDict.black};
  @media (max-width: 480px) {
    width: 160px;
  }
`;
const OuterDiv = styled.div`
  max-width: 479px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
  }
`;

export const CommonUserNameArea = (props: CommonUserNameAreaProps) => (
  <OuterDiv>
    <CaptionDiv>
      <Caption lv="h2" color="1">
        対象ユーザ
      </Caption>
    </CaptionDiv>
    <TextDiv>
      <Text size="3">{props.value}</Text>
    </TextDiv>
  </OuterDiv>
);
