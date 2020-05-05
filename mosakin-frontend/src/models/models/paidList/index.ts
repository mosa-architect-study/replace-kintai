import { DateValue, PaidTimeType } from "../common";
import { ErrorObject } from "../error";

export interface PaidListViewModel {
  list: PaidListRowViewModel[];
  header: PaidListHeaderViewModel;
  errors: ErrorObject[];
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
