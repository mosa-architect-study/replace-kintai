import { PaidListRowViewModel, PaidListHeaderViewModel } from ".";
import { action } from "@storybook/addon-actions";
import { PaidListItem, PaidViewModel } from "@/models/models/common";

export const paidList: PaidListItem[] = [
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
export const rows: PaidListRowViewModel[] = paidList.map<PaidListRowViewModel>(
  paid => ({
    paid,
    menu: {
      onDeleteButtonClick: action("DELETE:" + paid.paidId),
      onEditButtonClick: action("EDITE:" + paid.paidId)
    }
  })
);

export const header: PaidListHeaderViewModel & PaidViewModel = {
  annualPaidNumber: 10,
  currentPaidAcquisitionNumber: 5,
  leftPaidNumber: 5,
  carryForward: 3
};
