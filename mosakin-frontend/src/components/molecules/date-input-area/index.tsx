import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { InputDate } from "../../atoms/input-date";

export interface DateInputAreaProps {
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

export const DateInputArea = (props: DateInputAreaProps) => (
  <OuterDiv>
    <TitleDiv>
      <Caption lv="h3">日付</Caption>
    </TitleDiv>
    <InputDiv>
      <InputDate value={props.value} onChange={props.onChange}></InputDate>
    </InputDiv>
  </OuterDiv>
);
