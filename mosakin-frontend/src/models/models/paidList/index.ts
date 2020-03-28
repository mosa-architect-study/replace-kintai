import { PaidListItem, PaidViewModel, PaidTimeType } from "../common";

export interface PaidListViewModel {
  list: PaidListRowViewModel[];
  header: PaidListHeaderViewModel & PaidViewModel;
}

export interface PaidListRowViewModel {
  paid: PaidListItem;
  menu: PaidListMenu;
}

export interface PaidListHeaderViewModel {
  leftPaidNumber: number;
  currentPaidAcquisitionNumber: number;
}

export interface PaidListMenu {
  onEditButtonClick(): void;
  onDeleteButtonClick(): void;
}

// FIXME: もっといい置き場ないかな
export const paidTimeTypeToString: Record<PaidTimeType, string> = {
  ALL_DAY: "全日",
  AM: "午前",
  PM: "午後"
};
