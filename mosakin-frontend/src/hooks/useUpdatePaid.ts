import {
  UpdatePaidViewModel,
  UpdatePaidItem
} from "../models/models/UpdatePaid";
import { ErrorObject } from "@/models/models/error";
import { useState } from "react";
import { axios } from "@/common/api/axios";
import { useLoginInfo } from "@/context/LoginContext";
import { usePaidInfo } from "@/context/PaidContext";

export const useUpdatePaid = (): UpdatePaidViewModel => {
  const [dateValue, dateSetValue] = useState("");
  const [paidTimeValue, paidTimeOnChange] = useState("");
  const [reasonValue, reasonSetValue] = useState("");
  const [errors, setErrors] = useState<ErrorObject[]>([]);
  const user = useLoginInfo();
  const paid = usePaidInfo();
  const updateData: UpdatePaidItem = {
    paidId: paid.paidId,
    userName: user.user.name,
    beforeAcquisitionDate: paid.paidAcquisitionDate,
    dateValue: dateValue,
    dateOnChange: dateSetValue,
    beforePaidTimeType: paid.paidTimeType,
    paidTimeValue: paidTimeValue,
    paidTimeOnChange: paidTimeOnChange,
    reasonValue: reasonValue,
    reasonOnChange: reasonSetValue,
    adminFlg: user.user.role === "ADMIN"
  };
  const onSubmit = () => {
    axios
      .post(`/update`, {
        paidId: updateData.paidId,
        beforeAcquisitionDate: updateData.beforeAcquisitionDate,
        paidAcquisitionDate: updateData.dateValue,
        beforePaidTimeType: updateData.beforePaidTimeType,
        paidTimeType: paidTimeValue,
        paidReason: reasonValue
      })
      .then(res => {
        console.log(res);
        switch (res.data) {
          case "SUCCESS":
            setErrors([]);
            break;
          case "DUPLICATED":
            setErrors([
              {
                content: "DUPLICATED"
              }
            ]);
            break;
          case "NOTIFICATION_FAILED":
            setErrors([
              {
                content: "NOTIFICATION_FAILED"
              }
            ]);
            break;
          default:
            // APIから返ってくるメッセージが予想外なパターン
            setErrors([
              {
                content: "UNEXPECTED_ERROR"
              }
            ]);
            break;
        }
      })
      .catch(e => {
        console.log(e);
        setErrors([
          {
            content: "UNEXPECTED_ERROR"
          }
        ]);
      });
  };
  return { data: updateData, onSubmit: onSubmit, errors };
};
