import * as React from "react";
import styled from "@emotion/styled";
import { bp } from "@/common/theme";
import { Caption } from "../../atoms/caption";
import { InputDate } from "../../atoms/input-date";

export interface DateInputAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const TitleDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: ${bp}) {
    display: block;
    margin-bottom: 7px;
  }
`;
const InputDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: ${bp}) {
    display: flex;
    justify-content: center;
  }
`;
const OuterDiv = styled.div`
  max-width: 479px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${bp}) {
    display: block;
  }
`;

export const DateInputArea = (props: DateInputAreaProps) => (
  <OuterDiv>
    <TitleDiv>
      <Caption lv="h2" color="1">
        日付
      </Caption>
    </TitleDiv>
    <InputDiv>
      <InputDate value={props.value} onChange={props.onChange}></InputDate>
    </InputDiv>
  </OuterDiv>
);
