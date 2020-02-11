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
  list: PaidListRowProps[];
};

export const PaidListTable: React.FC<PaidListProps> = ({ list }) => (
  <StyledCard>
    <TableWrapper>
      <StyledTable>
        <tbody>
          <PaidListHeader></PaidListHeader>
          {list.map(row => (
            <PaidListRow key={row.item.paidId} {...row}></PaidListRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  </StyledCard>
);
