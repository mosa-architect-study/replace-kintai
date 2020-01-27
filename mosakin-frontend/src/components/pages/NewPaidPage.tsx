import React from "react";
import { useNewPaid } from "../../hooks/useNewPaid";
import { CreatePage } from "../templates/create-page";

export const NewPaidPage: React.FC = () => {
  const model = useNewPaid();
  return (
    <div>
      <CreatePage data={model.data} onSubmit={model.onSubmit}></CreatePage>
    </div>
  );
};
