import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { TextArea } from "../../atoms/textArea";

export interface PaidReasonAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const InnerDiv = styled.div`
  display: block;
  @media (max-width: 480px) {
    :nth-of-type(1) {
      margin-bottom: 18px;
    }
  }
`;
const OuterDiv = styled.div`
  max-width: 479px;
`;

export const PaidReasonArea = (props: PaidReasonAreaProps) => (
  <OuterDiv>
    <InnerDiv>
      <Caption lv="h3">有給所得理由</Caption>
    </InnerDiv>
    <InnerDiv>
      <TextArea value={props.value} onChange={props.onChange}></TextArea>
    </InnerDiv>
  </OuterDiv>
);
