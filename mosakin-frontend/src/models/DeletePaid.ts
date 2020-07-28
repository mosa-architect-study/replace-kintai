import { DateValue } from "./common";
import { ErrorObject } from "./error";

export interface DeletePaidViewModel {
  data: DeletePaidItem;
  errors: ErrorObject[];
  onSubmit: () => void;
}

export interface DeletePaidItem {
  paidId: string;
  userName?: string;
  dateValue: DateValue;
  paidTimeValue: string;
  reasonValue: string;
  reasonOnChange: (value: string) => void;
  adminFlg: boolean;
}
