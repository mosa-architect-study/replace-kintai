import { DateValue } from "./common";
import { ErrorBoxProps } from "@/components/molecules/error-box";

export interface NewPaidViewModel {
  data: NewPaidItem;
  errors: ErrorBoxProps;
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
