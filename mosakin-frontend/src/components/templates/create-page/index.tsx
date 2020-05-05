import * as React from "react";
import styled from "@emotion/styled";
import { bp } from "@/common/theme";
import { PageTitle } from "@/components/molecules/pageTitle";
import { CommonUserNameArea } from "@/components/molecules/common-user-name-area";
import { DateInputArea } from "@/components/molecules/date-input-area";
import { ErrorBox } from "@/components/molecules/error-box";
import { PaidTimeType } from "@/components/molecules/paid-time-type";
import { PaidReasonArea } from "@/components/molecules/paid-reason-area";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text/index";
import { NewPaidViewModel } from "@/models/models/newPaid";

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

const StyledErrorBoxWrapper = styled.div`
  margin-bottom: 30px;
`;

export const CreatePage = (props: NewPaidViewModel) => (
  <OuterDiv>
    <TitleArea>
      <PageTitle title="新規申請"></PageTitle>
    </TitleArea>

    <StyledErrorBoxWrapper>
      <ErrorBox errors={props.errors} />
    </StyledErrorBoxWrapper>

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
        <Text size="1">登録</Text>
      </Button>
    </ButtonArea>
  </OuterDiv>
);
