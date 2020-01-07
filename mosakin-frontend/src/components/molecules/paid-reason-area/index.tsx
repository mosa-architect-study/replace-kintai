import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { TextArea } from "../../atoms/textArea";

export interface PaidReasonAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const TitleDiv = styled.div`
  display: block;
  @media (max-width: 480px) {
    margin-bottom: 18px;
  }
`;
const InputDiv = styled.div`
  display: block;
`;
const OuterDiv = styled.div`
  max-width: 479px;
`;

export const PaidReasonArea = (props: PaidReasonAreaProps) => (
  <OuterDiv>
    <TitleDiv>
      <Caption lv="h3">有給所得理由</Caption>
    </TitleDiv>
    <InputDiv>
      <TextArea value={props.value} onChange={props.onChange}></TextArea>
    </InputDiv>
  </OuterDiv>
);
