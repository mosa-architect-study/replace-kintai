import React from "react";
import { PaidListRow, PaidListHeader } from ".";
import styled from "@emotion/styled";
import { action } from "@storybook/addon-actions";

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
        item={{
          paidId: "0",
          paidAcquisitionDate: "2020/02/11",
          paidTimeType: "AM"
        }}
        menu={{
          onDeleteButtonClick: action("onDeleteButtonClick"),
          onEditButtonClick: action("onEditButtonClick")
        }}
      ></PaidListRow>
      <PaidListRow
        item={{
          paidId: "1",
          paidAcquisitionDate: "2020/02/11",
          paidTimeType: "PM"
        }}
        menu={{
          onDeleteButtonClick: action("onDeleteButtonClick"),
          onEditButtonClick: action("onEditButtonClick")
        }}
      ></PaidListRow>
    </tbody>
  </StyledTable>
);
