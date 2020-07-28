import { useState } from "react";
import { axios } from "@/common/api/axios";
import { useLoginInfo } from "@/context/LoginContext";
import { DeletePaidViewModel, DeletePaidItem } from "@/models/DeletePaid";
import { ErrorObject } from "@/models/error";
import { useToast } from "@/context/ToastContext";

export const useDeletePaid = (): DeletePaidViewModel => {
  const [paidId, setPaidId] = useState("");
  const [dateValue, dateOnChange] = useState("");
  const [paidTimeValue, paidTimeOnChange] = useState("");
  const [reasonValue, reasonOnChange] = useState("");
  const [errors, setErrors] = useState<ErrorObject[]>([]);
  const user = useLoginInfo();
  const { showToast } = useToast();

  const deleteDate: DeletePaidItem = {
    paidId,
    userName: user.user.name,
    dateValue,
    paidTimeValue,
    reasonValue,
    reasonOnChange,
    adminFlg: user.user.role === "ADMIN",
  };

  const onSubmit = () => {
    axios
      .post(
        `/delete`,
        {
          paidId: deleteDate.paidId,
          paidAcquisitionDate: deleteDate.dateValue,
          paidTimeType: paidTimeValue,
          paidReason: reasonValue,
        },
        {
          validateStatus: function (status) {
            return status < 500;
          },
        }
      )
      .then(res => {
        if (res.status === 500) {
          setErrors([
            {
              content: "INTERNAL_SEWRVER_ERROR",
            },
          ]);
        } else {
          // 正常に処理ができていれば業務エラーでも200で返ってくる
          switch (res.data) {
            case "SUCCESS":
              setErrors([]);
              showToast({
                type: "SUCCESS",
                message: "けしたーーーーー", //TODO:
              });
              break;
            case "DUPLICATED":
              setErrors([
                {
                  content: "DUPLICATED",
                },
              ]);
              break;
            case "NOTIFICATION_FAILED":
              setErrors([
                {
                  content: "NOTIFICATION_FAILED",
                },
              ]);
              break;
            default:
              // APIから返ってくるメッセージが予想外なパターン
              setErrors([
                {
                  content: "UNEXPECTED_ERROR",
                },
              ]);
              break;
          }
        }
      })
      .catch(e => {
        console.log(e);
        setErrors([
          {
            content: "UNEXPECTED_ERROR",
          },
        ]);
      });
  };

  return {
    data: deleteDate,
    onSubmit,
    errors,
  };
};
