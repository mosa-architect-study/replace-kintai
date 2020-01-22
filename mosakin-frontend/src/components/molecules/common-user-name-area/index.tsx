import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { Text } from "../../atoms/text";

export interface CommonUserNameAreaProps {
  value: string;
}

const CaptionDiv = styled.div`
  vertical-align: middle;
`;
const TextDiv = styled.div`
  vertical-align: middle;
  width: 295px;
  text-align: left;
  @media (max-width: 480px) {
    width: 146px;
  }
`;
const OuterDiv = styled.div`
  max-width: 479px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    max-width: 256px;
  }
`;

export const CommonUserNameArea = (props: CommonUserNameAreaProps) => (
  <OuterDiv>
    <CaptionDiv>
      <Caption lv="h2">対象ユーザ</Caption>
    </CaptionDiv>
    <TextDiv>
      <Text color="1" size="2">
        {props.value}
      </Text>
    </TextDiv>
  </OuterDiv>
);
