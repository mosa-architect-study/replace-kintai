import {
  PaidListItem,
  PaidListRowViewModel,
  PaidListHeaderViewModel,
  AllUserPaidListHeaderViewModel,
} from ".";
import { action } from "@storybook/addon-actions";
import { ErrorObject } from "@/models/error";

export const paidList: PaidListItem[] = [
  {
    paidAcquisitionDate: "2020-02-10",
    paidTimeType: "ALL_DAY",
    paidId: "0",
  },
  {
    paidAcquisitionDate: "2020-02-11",
    paidTimeType: "AM",
    paidId: "1",
  },
  {
    paidAcquisitionDate: "2020-02-10",
    paidTimeType: "ALL_DAY",
    paidId: "2",
  },
  {
    paidAcquisitionDate: "2020-02-10",
    paidTimeType: "ALL_DAY",
    paidId: "3",
  },
  {
    paidAcquisitionDate: "2020-02-10",
    paidTimeType: "ALL_DAY",
    paidId: "4",
  },
];
export const rows: PaidListRowViewModel[] = paidList.map<PaidListRowViewModel>(
  paid => ({
    paid,
    menu: {
      onDeleteButtonClick: action("DELETE:" + paid.paidId),
      onEditButtonClick: action("EDITE:" + paid.paidId),
    },
  })
);

export const header: PaidListHeaderViewModel = {
  annualPaidNumber: 10,
  currentPaidAcquisitionNumber: 5,
  leftPaidNumber: 5,
  carryForward: 3,
};

export const errors: ErrorObject[] = <ErrorObject[]>[];

export const userData: AllUserPaidListHeaderViewModel[] = [
  {
    name: "がーすー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE"),
  },
  {
    name: "がーすー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE"),
  },
  {
    name: "がーすー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE"),
  },
  {
    name: "がーすー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE"),
  },
  {
    name: "がーすー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE"),
  },
  {
    name: "がーすー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE"),
  },
  {
    name: "がーすー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE"),
  },
  {
    name: "がーすー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE"),
  },
  {
    name: "ハギー",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE:2"),
  },
  {
    name: "omi",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE:3"),
  },
  {
    name: "猛者勤怠筋肉太郎",
    src: "/test",
    carryForward: 10,
    annualPaidNumber: 5,
    leftPaidNumber: 5,
    currentPaidAcquisitionNumber: 3,
    onEditButtonClick: action("EDITE:4"),
  },
];
