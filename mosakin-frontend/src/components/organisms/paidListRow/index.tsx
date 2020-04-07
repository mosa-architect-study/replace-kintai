import React from "react";
import { PaidListRowContents } from "@/components/molecules/paidListRowContents";
import { PaidListRowViewModel } from "@/models/models/paidList";

type PaidListRowProps = {
  rows: PaidListRowViewModel[];
};

export const PaidListRow: React.FC<PaidListRowProps> = ({ rows }) => {
  const paidList = rows.map((row: PaidListRowViewModel) => (
    <PaidListRowContents
      key={row.paid.paidId}
      paid={{
        paidId: row.paid.paidId,
        paidAcquisitionDate: row.paid.paidAcquisitionDate,
        paidTimeType: row.paid.paidTimeType
      }}
      menu={{
        onDeleteButtonClick: row.menu.onDeleteButtonClick,
        onEditButtonClick: row.menu.onEditButtonClick
      }}
    />
  ));
  return <div>{paidList}</div>;
};
