import * as React from "react";
import styled from "@emotion/styled";
import { bp } from "@/common/theme";
import { PageTitle } from "../../molecules/pageTitle";
import { CommonUserNameArea } from "../../molecules/common-user-name-area";
import { DateInputArea } from "../../molecules/date-input-area";
import { PaidTimeType } from "../../molecules/paid-time-type";
import { PaidReasonArea } from "../../molecules/paid-reason-area";
import { Button } from "../../atoms/button";
import { Text } from "../../atoms/text/index";
import { UpdatePaidViewModel } from "../../../models/updatePaid";

const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 28px;
`;
const InnerDiv = styled.div`
  display: block;
  margin-bottom: 43px;
`;
const PaidReasonDiv = styled.div`
  display: block;
  margin-bottom: 21px;
`;
const OuterDiv = styled.div`
  width: 479px;
  margin: auto;
  @media (max-width: ${bp}) {
    width: 90%;
    margin: auto;
  }
`;
const ButtonArea = styled.div`
  text-align: center;
`;

export const UpdatePage = (props: UpdatePaidViewModel) => (
  <OuterDiv>
    <TitleArea>
      <PageTitle title="登録変更申請"></PageTitle>
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
      <PaidTimeType
        value={props.data.paidTimeValue}
        onClick={props.data.paidTimeOnChange}
      ></PaidTimeType>
    </InnerDiv>
    <PaidReasonDiv>
      <PaidReasonArea
        value={props.data.reasonValue}
        onChange={props.data.reasonOnChange}
      ></PaidReasonArea>
    </PaidReasonDiv>
    <ButtonArea>
      <Button
        backgroundColor="1"
        width="s"
        height="s"
        color="white"
        onClick={props.onSubmit}
      >
        <Text size="1">変更</Text>
      </Button>
    </ButtonArea>
  </OuterDiv>
);
