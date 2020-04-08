import React from "react";
import { PaidListRow } from "@/components/molecules/paidListRow";
import { PaidListRowViewModel } from "@/models/models/paidList";

type PaidListRowsProps = {
  rows: PaidListRowViewModel[];
};

export const PaidListRows: React.FC<PaidListRowsProps> = ({ rows }) => (
  <div>
    {rows.map((row: PaidListRowViewModel) => (
      <PaidListRow key={row.paid.paidId} {...row} />
    ))}
  </div>
);
