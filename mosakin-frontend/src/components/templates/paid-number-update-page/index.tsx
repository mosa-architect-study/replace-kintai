import * as React from "react";
import styled from "@emotion/styled";
import { bp } from "@/common/theme";
import { Button } from "@/components/atoms/button";
import { Caption } from "../../atoms/caption";
import { InputNumber } from "@/components/atoms/inputNumber";
import { Text } from "@/components/atoms/text/index";
import { PageTitle } from "@/components/molecules/pageTitle";
import { CommonUserNameArea } from "@/components/molecules/common-user-name-area";

interface PaidNumberUpdatePageProps {
  // FIX ME: #224で定義済みの型に後で差し替え
  userData: {
    name: string;
    carryForward: number;
    annualPaidNumber: number;
  };
  carryForwardOnChange: (value: number) => void;
  annualPaidNumberOnChange: (value: number) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const StyledPageTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 28px;
`;

const StyledMarginBottom = styled.div`
  margin-bottom: 43px;
`;

const StyledContentsWrapper = styled.div`
  display: block;
  width: 460px;
  margin: auto;
  @media (max-width: ${bp}) {
    width: 350px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledMarginRight = styled.div`
  margin-right: 50px;
`;

// FIX ME: 全体的にCaption+コンポーネントを組み合わせたコンポーネントが多数存在しているので、一つにまとめたい
// captionはpropsで、コンポーネントはchildrenで何でも受け取れるようにする
interface InputNumberAreaProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const StyledWrapper = styled.div`
  max-width: 479px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${bp}) {
    display: block;
  }
`;

const StyledTitleWrapper = styled.div`
  @media (max-width: ${bp}) {
    display: block;
    margin-bottom: 7px;
  }
`;
const StyledInputWrapper = styled.div`
  @media (max-width: ${bp}) {
    display: flex;
    justify-content: center;
  }
`;

const InputNumberArea: React.FC<InputNumberAreaProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <Caption lv="h2" color="1">
          {label}
        </Caption>
      </StyledTitleWrapper>

      <StyledInputWrapper>
        <InputNumber value={value} onChange={onChange} />
      </StyledInputWrapper>
    </StyledWrapper>
  );
};

export const PaidNumberUpdatePage: React.FC<PaidNumberUpdatePageProps> = props => {
  const {
    userData,
    onCancel,
    onSubmit,
    annualPaidNumberOnChange,
    carryForwardOnChange,
  } = props;
  return (
    <div>
      <StyledPageTitleWrapper>
        <PageTitle title="有給情報変更申請"></PageTitle>
      </StyledPageTitleWrapper>

      <StyledContentsWrapper>
        <StyledMarginBottom>
          <CommonUserNameArea value={userData.name}></CommonUserNameArea>
        </StyledMarginBottom>

        <StyledMarginBottom>
          <InputNumberArea
            label="繰越分"
            value={userData.carryForward}
            onChange={carryForwardOnChange}
          />
        </StyledMarginBottom>

        <StyledMarginBottom>
          <InputNumberArea
            label="年次有給数"
            value={userData.annualPaidNumber}
            onChange={annualPaidNumberOnChange}
          />
        </StyledMarginBottom>
      </StyledContentsWrapper>

      <StyledButtonWrapper>
        <StyledMarginRight>
          <Button
            backgroundColor="2"
            width="s"
            height="s"
            color="light"
            onClick={onCancel}
          >
            <Text size="1">キャンセル</Text>
          </Button>
        </StyledMarginRight>

        <Button
          backgroundColor="1"
          width="s"
          height="s"
          color="white"
          onClick={onSubmit}
        >
          <Text size="1">登録</Text>
        </Button>
      </StyledButtonWrapper>
    </div>
  );
};
