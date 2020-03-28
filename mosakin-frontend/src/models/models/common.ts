// 日付の別名
export type DateValue = string;

// ローディングも考慮されたViewModelを返す
export type LoadableViewModel<T> =
  | LoadableViewModelOnFetched<T>
  | LoadableViewModelOnLoading;

interface LoadableViewModelBase {
  status: "Loading" | "Fetched";
}

interface LoadableViewModelOnFetched<T> extends LoadableViewModelBase {
  status: "Fetched";
  data: T;
}

interface LoadableViewModelOnLoading extends LoadableViewModelBase {
  status: "Loading";
}

export interface PaidViewModel {
  carryForward: number;
  annualPaidNumber: number;
}

export interface PaidItem extends PaidListItem {
  reasonValue: string;
}

export interface PaidListItem {
  paidId: string;
  paidAcquisitionDate: DateValue;
  paidTimeType: string | PaidTimeType;
}

export type PaidTimeType = "ALL_DAY" | "AM" | "PM";
