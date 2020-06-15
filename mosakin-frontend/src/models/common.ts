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

export type PaidTimeType = "ALL_DAY" | "AM" | "PM";

// FIXME: もっといい置き場ないかな
export const paidTimeTypeToString: Record<PaidTimeType, string> = {
  ALL_DAY: "全日",
  AM: "午前",
  PM: "午後"
};
