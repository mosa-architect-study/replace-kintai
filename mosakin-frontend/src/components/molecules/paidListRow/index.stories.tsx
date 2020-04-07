import React from "react";
import styled from "@emotion/styled";
import { action } from "@storybook/addon-actions";
import { PaidListRow, PaidListHeader } from ".";
import { PaidListRowContents } from "./index2";
import { paidList } from "@/models/models/paidList/mock";

export default {
  title: "molecules/PaidListRow"
};

const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const ex = () => (
  <PaidListRowContents
    paid={paidList[0]}
    menu={{
      onDeleteButtonClick: action("onDeleteButtonClick"),
      onEditButtonClick: action("onEditButtonClick")
    }}
  />
);

export const normal = () => (
  <StyledTable>
    <tbody>
      <PaidListHeader></PaidListHeader>
      <PaidListRow
        paid={{
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
        paid={{
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
