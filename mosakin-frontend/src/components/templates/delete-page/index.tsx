import * as React from "react";
import styled from "@emotion/styled";
import { paletteDict, bp } from "@/common/theme";
import { Button } from "@/components/atoms/button";
import { Caption } from "@/components/atoms/caption";
import { Text } from "@/components/atoms/text";
import { DateValue } from "@/models/models/common";
import { PageTitle } from "@/components/molecules/pageTitle";
import { CommonUserNameArea } from "@/components/molecules/common-user-name-area";
import { PaidReasonArea } from "../../molecules/paid-reason-area";

interface DeleteTemplateProps {
  userData: {
    paidId: string;
    userName: string;
    paidTimeType: string;
    paidAcquisitionDate: DateValue;
    paidReason: string;
    adminFlg: boolean;
  };
  onSubmit: () => void;
  reasonOnChange: () => void;
}

const OuterDiv = styled.div`
  width: 460px;
  margin: auto;
  @media (max-width: ${bp}) {
    width: 350px;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

//FIXME:PaidReasonAreaのonChange={reasonOnChange}はエラー消すためとりあえず。なんとか出来たらなんとかする
export const DeleteTemplate: React.FC<DeleteTemplateProps> = props => {
  const { userData, onSubmit, reasonOnChange } = props;
  return (
    <div>
      <OuterDiv>
        <TitleWrapper>
          <PageTitle title="削除申請" />
        </TitleWrapper>
        {props.userData.adminFlg && (
          <UserNameWrapper>
            <CommonUserNameArea value={props.userData.userName} />
          </UserNameWrapper>
        )}
        <PaidAcquisitionDateWrapper>
          <Caption lv="h2" color="1">
            日付
          </Caption>
          <PaidAcquisitionDateTextWrapper>
            <Text size="1">{userData.paidAcquisitionDate} </Text>
          </PaidAcquisitionDateTextWrapper>
        </PaidAcquisitionDateWrapper>
        <PaidTimeTypeWrapper>
          <Caption lv="h2" color="1">
            有給時間種別
          </Caption>
          <PaidTimeTypeTextWrapper>
            <Text size="1">{userData.paidTimeType} </Text>
          </PaidTimeTypeTextWrapper>
        </PaidTimeTypeWrapper>
        <PaidReasonWrapper>
          <PaidReasonArea
            value={userData.paidReason}
            onChange={reasonOnChange}
          />
        </PaidReasonWrapper>
        <ButtonWrapper>
          <Button
            backgroundColor="1"
            width="s"
            height="s"
            color="white"
            onClick={onSubmit}
          >
            <Text size="1">登録</Text>
          </Button>
        </ButtonWrapper>
      </OuterDiv>
    </div>
  );
};
