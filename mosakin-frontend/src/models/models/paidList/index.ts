import { DateValue } from "../common";

export interface PaidListViewModel {
  list: PaidListRowViewModel[];
  header: PaidListHeaderViewModel;
}

export interface PaidListRowViewModel {
  paid: PaidListItem;
  menu: PaidListMenu;
}

export interface PaidListHeaderViewModel {
  carryForward: number;
  annualPaidNumber: number;
  leftPaidNumber: number;
  currentPaidAcquisitionNumber: number;
}

export interface AllUserPaidListHeaderViewModel
  extends PaidListHeaderViewModel {
  name: string;
  src: string;
  onEditButtonClick(): void;
}

export interface PaidListItem {
  paidId: string;
  paidAcquisitionDate: DateValue;
  paidTimeType: PaidTimeType;
}

export interface PaidListMenu {
  onEditButtonClick(): void;
  onDeleteButtonClick(): void;
}

export type PaidTimeType = "ALL_DAY" | "AM" | "PM";

// FIXME: もっといい置き場ないかな
export const paidTimeTypeToString: Record<PaidTimeType, string> = {
  ALL_DAY: "全日",
  AM: "午前",
  PM: "午後"
};
