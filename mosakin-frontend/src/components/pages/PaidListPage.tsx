import { usePaidList } from "../../hooks/usePaidList";

import React from "react";
import { PaidListTemplate } from "../templates/PaidList";

/**
 * Pageはhooksから取得したデータをコンポーネントに流す。
 */
export const PaidListPage: React.FC = () => {
  const model = usePaidList();
  return <PaidListTemplate {...model}></PaidListTemplate>;
};
