import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { Toggle } from "../../atoms/toggle";

export interface PaidTimeAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const TitleDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 480px) {
    display: block;
  }
`;
const InputDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 480px) {
    margin-left: 40px;
    display: block;
  }
`;
const OuterDiv = styled.div`
  max-width: 479px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    display: block;
  }
`;

export const PaidTimeArea = (props: PaidTimeAreaProps) => (
  <OuterDiv>
    <TitleDiv>
      <Caption lv="h3">有給時間種別</Caption>
    </TitleDiv>
    <InputDiv>
      <Toggle value="全日" group="group1" size="1" selected></Toggle>
      <Toggle value="午前" group="group1" size="1" selected={false}></Toggle>
      <Toggle value="午後" group="group1" size="1" selected={false}></Toggle>
    </InputDiv>
  </OuterDiv>
);
