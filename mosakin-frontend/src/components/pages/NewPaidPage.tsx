import React from "react";
import { useNewPaid } from "../../hooks/useNewPaid";
import { CreatePage } from "../templates/create-page";

export const NewPaidPage: React.FC = () => {
  const model = useNewPaid();
  return (
    <div>
      <CreatePage
        data={model.data}
        errors={model.errors}
        onSubmit={model.onSubmit}
      ></CreatePage>
    </div>
  );
};
