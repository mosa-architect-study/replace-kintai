import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { Text } from "../../atoms/text";

export interface CommonUserNameAreaProps {
  value: string;
}

const InnerDiv = styled.div`
  /* display: inline-block; */
  vertical-align: middle;
  :nth-of-type(2) {
    width: 295px;
    text-align: left;
  }
  @media (max-width: 480px) {
    :nth-of-type(2) {
      width: 146px;
    }
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
    <InnerDiv>
      <Caption lv="h3">対象ユーザ</Caption>
    </InnerDiv>
    <InnerDiv>
      <Text color="1" size="2">
        {props.value}
      </Text>
    </InnerDiv>
  </OuterDiv>
);
