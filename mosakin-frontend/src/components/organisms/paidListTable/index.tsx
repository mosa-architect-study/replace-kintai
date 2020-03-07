import React from "react";
import styled from "@emotion/styled";
import { PaidListHeader, PaidListRow } from "../../molecules/paidListRow";
import { Card } from "../../atoms/card";
import { PaidListRowViewModel } from "@/models/models/paidList";

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const TableWrapper = styled.div`
  padding: 14px 33px;
  @media (max-width: 480px) {
    padding: 14px 19px;
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
