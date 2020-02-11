import React from "react";
import { PaidListRow, PaidListHeader } from ".";
import styled from "@emotion/styled";

export default {
  title: "molecules/PaidListRow"
};

const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const normal = () => (
  <StyledTable>
    <tbody>
      <PaidListHeader></PaidListHeader>
      <PaidListRow
        paidId="0"
        paidAcquisitionDate="2020/02/11"
        paidTimeType="AM"
      ></PaidListRow>
      <PaidListRow
        paidId="1"
        paidAcquisitionDate="2020/02/11"
        paidTimeType="PM"
      ></PaidListRow>
    </tbody>
  </StyledTable>
);
