import { DateValue } from "./common";
import { ErrorObject } from "./error";

export interface NewPaidViewModel {
  data: NewPaidItem;
  errors: ErrorObject[];
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
