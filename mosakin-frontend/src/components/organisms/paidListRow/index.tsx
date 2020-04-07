import React from "react";
import { PaidListRowContents } from "@/components/molecules/paidListRowContents";
import { PaidListRowViewModel } from "@/models/models/paidList";

type PaidListRowProps = {
  rows: PaidListRowViewModel[];
};

export const PaidListRow: React.FC<PaidListRowProps> = ({ rows }) => (
  <div>
    {rows.map((row: PaidListRowViewModel) => (
      <PaidListRowContents key={row.paid.paidId} {...row} />
    ))}
  </div>
);
