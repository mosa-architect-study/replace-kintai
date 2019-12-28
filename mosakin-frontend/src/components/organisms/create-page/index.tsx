import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { CommonUserNameArea } from "../../molecules/common-user-name-area";
import { DateInputArea } from "../../molecules/date-input-area";
import { PaidReasonArea } from "../../molecules/paid-reason-area";
import { Button } from "../../atoms/button";

export interface CreatePageProps {
  title: string;
  userName: string;
  dateValue: string;
  dateOnChange: (value: string) => void;
  reasonValue: string;
  reasonOnChange: (value: string) => void;
  adminFlg: boolean;
  onClick: () => void;
}

export interface CreateDateProps {
  data: CreatePageProps;
}
const TitleArea = styled.div`
  text-align: center;
`;

const InnerDiv = styled.div`
  display: block;
  :nth-of-type(n + 1) {
    margin-bottom: 43px;
    /* margin-left: 40px; */
  }
  /* display: block; */
  /* vertical-align: middle; */
  @media (max-width: 480px) {
    :nth-of-type(n + 2) {
      margin-bottom: 43px;
      /* margin-left: 40px; */
    }
    /* display: block; */
  }
`;
const OuterDiv = styled.div`
  width: 479px;
  margin: auto;
  /* margin: auto; */
  /* max-width: 479px; */
  /* display: flex;
  justify-content: space-between; */
  @media (max-width: 480px) {
    /* display: block; */
  }
`;
const ButtonArea = styled.div`
  text-align: center;
`;

export const CreatePage = (props: CreateDateProps) => (
  <OuterDiv>
    <TitleArea>
      <Caption lv="h3">{props.data.title}</Caption>
    </TitleArea>
    {props.data.adminFlg && (
      <InnerDiv>
        <CommonUserNameArea value={props.data.userName}></CommonUserNameArea>
      </InnerDiv>
    )}
    <InnerDiv>
      <DateInputArea
        value={props.data.dateValue}
        onChange={props.data.dateOnChange}
      ></DateInputArea>
    </InnerDiv>
    <InnerDiv>
      <PaidReasonArea
        value={props.data.reasonValue}
        onChange={props.data.reasonOnChange}
      ></PaidReasonArea>
    </InnerDiv>
    <ButtonArea>
      <Button color="1" backgroundColor="1" onClick={props.data.onClick}>
        ボタン
      </Button>
    </ButtonArea>
  </OuterDiv>
);
