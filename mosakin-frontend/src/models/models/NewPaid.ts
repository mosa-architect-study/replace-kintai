import { DateValue } from "./common";

export interface NewPaidViewModel {
  data: NewPaidItem;
  onSubmit: () => void;
}

export interface NewPaidItem {
  userName?: string;
  dateValue: DateValue;
  dateOnChange: (value: string) => void;
  paidTimeValue: string;
  paidTimeOnChange: (value: string) => void;
  reasonValue: string;
  reasonOnChange: (value: string) => void;
  adminFlg: boolean;
}
