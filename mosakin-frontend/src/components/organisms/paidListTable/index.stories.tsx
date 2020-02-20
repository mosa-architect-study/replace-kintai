import React from "react";
import { PaidListTable } from ".";
import { PaidListItem } from "@/models/models/paidList";
import { PaidListRowProps } from "@/components/molecules/paidListRow";
import { action } from "@storybook/addon-actions";

export default {
  title: "oragnisms/PaidListTable"
};

const mockList: PaidListItem[] = [
  {
    paidAcquisitionDate: "2020-02-10",
    paidTimeType: "ALL_DAY",
    paidId: "0"
  },
  {
    paidAcquisitionDate: "2020-02-11",
    paidTimeType: "AM",
    paidId: "1"
  },
  {
    paidAcquisitionDate: "2020-02-10",
    paidTimeType: "ALL_DAY",
    paidId: "2"
  },
  {
    paidAcquisitionDate: "2020-02-10",
    paidTimeType: "ALL_DAY",
    paidId: "3"
  },
  {
    paidAcquisitionDate: "2020-02-10",
    paidTimeType: "ALL_DAY",
    paidId: "4"
  }
];

const rows: PaidListRowProps[] = mockList.map<PaidListRowProps>(paid => ({
  paid,
  menu: {
    onDeleteButtonClick: action("DELETE:" + paid.paidId),
    onEditButtonClick: action("EDITE:" + paid.paidId)
  }
}));

export const sample: React.FC = () => (
  <PaidListTable rows={rows}></PaidListTable>
);
