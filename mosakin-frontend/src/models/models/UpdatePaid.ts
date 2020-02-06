import { DateValue } from "./common";

export interface UpdatePaidViewModel {
  data: UpdatePaidItem;
  onSubmit: () => void;
}

export interface UpdatePaidItem {
  userName: string;
  dateValue: DateValue;
  dateOnChange: (value: string) => void;
  paidTimeValue: string;
  paidTimeOnChange: (value: string) => void;
  reasonValue: string;
  reasonOnChange: (value: string) => void;
  adminFlg: boolean;
}
