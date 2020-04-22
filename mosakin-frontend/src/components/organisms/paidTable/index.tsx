import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { paletteDict } from "@/common/theme";
import {
  AllUserPaidListHeaderViewModel,
  tableHeaderLabelList
} from "@/models/models/paidList";
import { Icon } from "@/components/atoms/icon";

interface PaidTableProps {
  userDate: AllUserPaidListHeaderViewModel[];
}

const StyledPaidTableWrapper = styled.div`
  width: 1100px;
  max-width: 95%;
  overflow-x: scroll;
`;

const StyledTable = () => css`
  table-layout: fixed;
`;

const StyledHeadTable = styled.table`
  width: 1100px;
  border-collapse: separate;
  ${StyledTable};
`;

const StyledBodyTableWrapperScrollBox = styled.div`
  width: 1100px;
  max-height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;

const StyledBodyTable = styled.table`
  width: 1100px;
  border-collapse: collapse;
  ${StyledTable};
`;

const StyledHeadTableTh = styled.th`
  text-align: left;
  padding: 6px 6px 6px 15px;
  background: ${paletteDict.base};
  color: ${paletteDict.white};
  box-shadow: 2px 8px rgba(147, 143, 143, 0.4);
`;

const StyledBodyTableTr = styled.tr`
  &:nth-of-type(2n) {
    background: ${paletteDict.superlight};
  }
  &:nth-of-type(2n-1) {
    background: ${paletteDict.white};
  }
`;

const StyledBodyTableTd = styled.td`
  padding: 6px 6px 6px 15px;
  color: ${paletteDict.black};
`;

const StyledIcon = styled.div`
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${paletteDict.base};
  &:hover {
    color: ${paletteDict.light};
  }
`;

// ヘッダーラベルは固定
// もっときれいにかけそう（どなたか）
const PaidTableHeader: React.FC = () => {
  const label = tableHeaderLabelList.map((label, index) => (
    <tr key={index}>
      <StyledHeadTableTh>{label.name}</StyledHeadTableTh>
      <StyledHeadTableTh>{label.carryForward}</StyledHeadTableTh>
      <StyledHeadTableTh>{label.annualPaidNumber}</StyledHeadTableTh>
      <StyledHeadTableTh>{label.leftPaidNumber}</StyledHeadTableTh>
      <StyledHeadTableTh>
        {label.currentPaidAcquisitionNumber}
      </StyledHeadTableTh>
      <StyledHeadTableTh>{label.exit}</StyledHeadTableTh>
    </tr>
  ));
  return <>{label}</>;
};

// データを詰める
const PaidTableBody: React.FC<PaidTableProps> = ({ userDate }) => {
  const data = userDate.map((paidData, index) => (
    <StyledBodyTableTr key={index}>
      <StyledBodyTableTd>
        <StyledLink to={paidData.src}>{paidData.name}</StyledLink>
      </StyledBodyTableTd>
      <StyledBodyTableTd>{paidData.carryForward}</StyledBodyTableTd>
      <StyledBodyTableTd>{paidData.annualPaidNumber}</StyledBodyTableTd>
      <StyledBodyTableTd>{paidData.leftPaidNumber}</StyledBodyTableTd>
      <StyledBodyTableTd>
        {paidData.currentPaidAcquisitionNumber}
      </StyledBodyTableTd>
      <StyledBodyTableTd>
        <StyledIcon onClick={paidData.onEditButtonClick}>
          <Icon name="pencilThin" width="m" height="m"></Icon>
        </StyledIcon>
      </StyledBodyTableTd>
    </StyledBodyTableTr>
  ));
  return <>{data}</>;
};

export const PaidTable: React.FC<PaidTableProps> = (props: PaidTableProps) => {
  const { userDate } = props;
  return (
    <StyledPaidTableWrapper>
      <StyledHeadTable>
        <tbody>
          <PaidTableHeader />
        </tbody>
      </StyledHeadTable>

      <StyledBodyTableWrapperScrollBox>
        <StyledBodyTable>
          <tbody>
            <PaidTableBody userDate={userDate} />
          </tbody>
        </StyledBodyTable>
      </StyledBodyTableWrapperScrollBox>
    </StyledPaidTableWrapper>
  );
};
