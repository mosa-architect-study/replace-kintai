import React from "react";
import styled from "@emotion/styled";
import { bp } from "@/common/theme";
import { PaidListHeader, PaidListRow } from "../../molecules/paidListRow";
import { Card } from "../../atoms/card";
import { PaidListRowViewModel } from "@/models/models/paidList";

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const TableWrapper = styled.div`
  padding: 14px 33px;
  @media (max-width: ${bp}) {
    padding: 14px 11px;
  }
`;

type PaidListProps = {
  rows: PaidListRowViewModel[];
};

export const PaidListTable: React.FC<PaidListProps> = ({ rows }) => (
  <Card>
    <TableWrapper>
      <StyledTable>
        <tbody>
          <PaidListHeader></PaidListHeader>
          {rows.map(row => (
            <PaidListRow key={row.paid.paidId} {...row}></PaidListRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  </Card>
);