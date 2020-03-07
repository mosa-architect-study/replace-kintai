import React from "react";
import { PaidListTable } from ".";
import { rows } from "@/models/models/paidList/mock";

export default {
  title: "organisms/PaidListTable"
};

export const sample: React.FC = () => (
  <PaidListTable rows={rows}></PaidListTable>
);
