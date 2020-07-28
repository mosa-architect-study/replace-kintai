import * as React from "react";
import styled from "@emotion/styled";
import { paletteDict, bp } from "@/common/theme";
import { Button } from "@/components/atoms/button";
import { Caption } from "@/components/atoms/caption";
import { Text } from "@/components/atoms/text";
import { PageTitle } from "@/components/molecules/pageTitle";
import { CommonUserNameArea } from "@/components/molecules/common-user-name-area";
import { PaidReasonArea } from "@/components/molecules/paid-reason-area";
import { ErrorBox } from "@/components/molecules/error-box";
import { DeletePaidViewModel } from "@/models/DeletePaid";
import dayjs from "dayjs";

const OuterDiv = styled.div`
  width: 479px;
  margin: auto;
  @media (max-width: ${bp}) {
    width: 90%;
    margin: auto;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 28px;
`;

const UserNameWrapper = styled.div`
  margin-bottom: 25px;
  @media (max-width: ${bp}) {
    margin-bottom: 15px;
  }
`;

const PaidAcquisitionDateWrapper = styled.div`
  display: flex;
  margin-bottom: 48px;
  align-items: center;
  @media (max-width: ${bp}) {
    margin-bottom: 17px;
  }
`;

const PaidAcquisitionDateTextWrapper = styled.div`
  margin-left: 146px;
  color: ${paletteDict.black};
  @media (max-width: ${bp}) {
    margin-left: 18px;
  }
`;

const PaidTimeTypeWrapper = styled.div`
  display: flex;
  margin-bottom: 37px;
  align-items: center;
  @media (max-width: ${bp}) {
    margin-bottom: 66px;
  }
`;

const PaidTimeTypeTextWrapper = styled.div`
  margin-left: 52px;
  color: ${paletteDict.black};
  @media (max-width: ${bp}) {
    margin-left: 31px;
  }
`;

const PaidReasonWrapper = styled.div`
  display: block;
  margin-bottom: 28px;
  @media (max-width: ${bp}) {
    margin-bottom: 22px;
  }
`;

const ButtonArea = styled.div`
  text-align: center;
`;

export const DeletePage: React.FC<DeletePaidViewModel> = props => {
  const { data, onSubmit, errors } = props;
  return (
    <div>
      <OuterDiv>
        <TitleWrapper>
          <PageTitle title="削除申請" />
        </TitleWrapper>
        {data.adminFlg && (
          <UserNameWrapper>
            <CommonUserNameArea value={data.userName} />
          </UserNameWrapper>
        )}

        <ErrorBox errors={errors} />

        <PaidAcquisitionDateWrapper>
          <Caption lv="h2" color="1">
            日付
          </Caption>
          <PaidAcquisitionDateTextWrapper>
            <Text size="1">{dayjs(data.dateValue).format("YYYY/MM/DD")}</Text>
          </PaidAcquisitionDateTextWrapper>
        </PaidAcquisitionDateWrapper>

        <PaidTimeTypeWrapper>
          <Caption lv="h2" color="1">
            有給時間種別
          </Caption>
          <PaidTimeTypeTextWrapper>
            <Text size="1">{data.paidTimeValue}</Text>
          </PaidTimeTypeTextWrapper>
        </PaidTimeTypeWrapper>

        <PaidReasonWrapper>
          <PaidReasonArea
            value={data.reasonValue}
            onChange={data.reasonOnChange}
          />
        </PaidReasonWrapper>

        <ButtonArea>
          <Button
            backgroundColor="1"
            width="s"
            height="s"
            color="white"
            onClick={onSubmit}
          >
            <Text size="1">登録</Text>
          </Button>
        </ButtonArea>
      </OuterDiv>
    </div>
  );
};
