import { DateValue } from "./common";
import { ErrorObject } from "@/models/models/error";

export interface UpdatePaidViewModel {
  data: UpdatePaidItem;
  onSubmit: () => void;
  errors: ErrorObject[];
}

export interface UpdatePaidItem {
  paidId: string;
  userName?: string;
  beforeAcquisitionDate: DateValue;
  dateValue: DateValue;
  dateOnChange: (value: string) => void;
  beforePaidTimeType: string;
  paidTimeValue: string;
  paidTimeOnChange: (value: string) => void;
  reasonValue: string;
  reasonOnChange: (value: string) => void;
  adminFlg: boolean;
}
