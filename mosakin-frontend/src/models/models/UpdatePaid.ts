import { DateValue, PaidItem } from "./common";

export interface UpdatePaidViewModel {
  data: UpdatePaidItem & PaidItem;
  onSubmit: () => void;
}

export interface UpdatePaidItem {
  userName?: string;
  beforeValue: DateValue;
  dateOnChange: (value: string) => void;
  beforePaidTimeValue: string;
  paidTimeOnChange: (value: string) => void;
  reasonOnChange: (value: string) => void;
  adminFlg: boolean;
}
