import { DateValue } from "./common";
import { ErrorObject } from "@/models/error";

export interface UpdatePaidViewModel {
  data: UpdatePaidItem;
  onSubmit: () => void;
  errors: ErrorObject[];
}

export interface UpdatePaidItem {
  paidId: string;
  userName?: string;
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
