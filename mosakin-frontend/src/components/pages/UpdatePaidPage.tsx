import React from "react";
import { useUpdatePaid } from "../../hooks/useUpdatePaid";
import { UpdatePage } from "../templates/update-page";

export const UpdatePaidPage: React.FC = () => {
  const model = useUpdatePaid();
  return (
    <div>
      <UpdatePage data={model.data} onSubmit={model.onSubmit}></UpdatePage>
    </div>
  );
};
