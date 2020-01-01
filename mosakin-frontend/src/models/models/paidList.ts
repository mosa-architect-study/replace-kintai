import { DateValue } from "./common";

export interface PaidListViewModel {
  list: PaidListItem[];
  header: PaidListHeader;
}

export interface PaidListHeader {
  carryForward: number;
  annualPaidNumber: number;
  leftPaidNumber: number;
  currentPaidAcquisitionNumber: number;
}

export interface PaidListItem {
  paidId: string;
  paidAcquisitionDate: DateValue;
  paidTimeType: PaidTimeType;
}

export type PaidTimeType = "ALL_DAY" | "AM" | "PM";
