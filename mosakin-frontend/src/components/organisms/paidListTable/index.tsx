import React from "react";
import styled from "@emotion/styled";
import { PaidListHeader, PaidListRow } from "../../molecules/paidListRow";
import { PaidListItem } from "@/models/models/paidList";
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
  list: PaidListItem[];
};

export const PaidListTable: React.FC<PaidListProps> = ({ list }) => (
  <StyledCard>
    <TableWrapper>
      <StyledTable>
        <tbody>
          <PaidListHeader></PaidListHeader>
          {list.map(item => (
            <PaidListRow key={item.paidId} {...item}></PaidListRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  </StyledCard>
);
