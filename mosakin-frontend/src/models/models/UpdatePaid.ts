import { DateValue } from "./common";

export interface UpdatePaidViewModel {
  data: UpdatePaidItem;
  onSubmit: () => void;
}

export interface UpdatePaidItem {
  paidId: string;
  userName: string;
  beforeValue: DateValue;
  dateValue: DateValue;
  dateOnChange: (value: string) => void;
  beforePaidTimeValue: string;
  paidTimeValue: string;
  paidTimeOnChange: (value: string) => void;
  reasonValue: string;
  reasonOnChange: (value: string) => void;
  adminFlg: boolean;
}
