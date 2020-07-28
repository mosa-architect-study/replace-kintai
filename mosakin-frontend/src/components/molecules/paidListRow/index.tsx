import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";
import { Text } from "@/components/atoms/text";
import { Icon } from "@/components/atoms/icon";
import { Card } from "@/components/atoms/card";
import { PaidListRowViewModel } from "@/models/paidList";
import dayjs from "dayjs";
import { paidTimeTypeToString } from "@/models/common";

// 共通化

const StyledSideMargin = () => css`
  margin-right: 40px;
  :last-child {
    margin: 0;
  }
`;

const StyledMarginBottom = () => css`
  margin-bottom: 10px;
`;

// 以下コンポーネント

const StyledPaidListRowContentsWrapper = styled.div`
  margin: 25px;
  ${StyledMarginBottom};
`;

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  ${StyledMarginBottom};
`;

const StyledPaidAcquisitionDateTextWrapper = styled.div`
  ::before {
    content: "有給取得日";
    display: block;
    color: ${paletteDict.base};
    ${StyledMarginBottom};
  }
  color: ${paletteDict.black};
  ${StyledSideMargin};
  /* ここだけ隣同士の距離をとりたい */
  margin-right: 60px;
`;

const StyledPaidTimeTypeTextWrapper = styled.div`
  ::before {
    content: "有給時間種別";
    display: block;
    color: ${paletteDict.base};
    ${StyledMarginBottom};
  }
  color: ${paletteDict.black};
  ${StyledSideMargin};
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledIconMargin = styled.div`
  cursor: pointer;
  ${StyledSideMargin};
`;

const StyledLine = styled.div`
  border-bottom: solid 1px ${paletteDict.border};
  ${StyledMarginBottom};
`;

export const PaidListRow: React.FC<PaidListRowViewModel> = ({ paid, menu }) => (
  <Card>
    <StyledPaidListRowContentsWrapper>
      <StyledTextWrapper>
        <StyledPaidAcquisitionDateTextWrapper>
          {/* FIX ME: サイズは暫定 */}
          <Text size="3">
            {/* FIXME: 後々共通化等したい */}
            {dayjs(paid.paidAcquisitionDate).format("YYYY/MM/DD")}
          </Text>
        </StyledPaidAcquisitionDateTextWrapper>

        <StyledPaidTimeTypeTextWrapper>
          {/* FIXME: サイズは暫定 */}
          <Text size="3">{paidTimeTypeToString[paid.paidTimeType]}</Text>
        </StyledPaidTimeTypeTextWrapper>
      </StyledTextWrapper>

      <StyledLine />

      <StyledIconWrapper>
        <StyledIconMargin onClick={menu.onEditButtonClick}>
          <Icon name="pencilThin" width="m" height="m"></Icon>
        </StyledIconMargin>

        <StyledIconMargin onClick={menu.onDeleteButtonClick}>
          <Icon name="xMark" width="m" height="m"></Icon>
        </StyledIconMargin>
      </StyledIconWrapper>
    </StyledPaidListRowContentsWrapper>
  </Card>
);
