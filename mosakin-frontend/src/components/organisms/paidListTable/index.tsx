import React from "react";
import styled from "@emotion/styled";
import {
  PaidListHeader,
  PaidListRow,
  PaidListRowProps
} from "../../molecules/paidListRow";
import { Card } from "../../atoms/card";

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const TableWrapper = styled.div`
  padding: 14px 33px;
`;

const StyledCard = styled(Card)`
  width: 603px;
`;

type PaidListProps = {
  rows: PaidListRowProps[];
};

export const PaidListTable: React.FC<PaidListProps> = ({ rows }) => (
  <StyledCard>
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
  </StyledCard>
);
