import React from "react";
import { PaidListTable } from ".";
import { PaidListItem } from "@/models/models/paidList";

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

export const sample: React.FC = () => (
  <PaidListTable list={mockList}></PaidListTable>
);
