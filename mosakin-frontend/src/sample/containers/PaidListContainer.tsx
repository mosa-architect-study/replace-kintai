import { usePaidList } from "../logics/usePaidList";

import React from "react";
import { LoadableViewModel } from "../models/common";
import { PaidListViewModel } from "../models/paidList";
import styled from "@emotion/styled";

/**
 * Containerはhooksから取得したデータをコンポーネントに流す。
 */
export const PaidListContainer: React.FC = () => {
  const model = usePaidList();
  return <PaidListPresenter {...model}></PaidListPresenter>;
};

const PaidListFrame = styled.p`
  background-color: green;
  color: whitesmoke;
`;

/**
 *
 * ViewModelを描画するReact Component
 * Presentationalなコンポーネントの中で最も上位に位置し、
 * 細々としたコンポーネントを束ね、Viewを構成する。
 *
 * @param model ViewModel
 */
const PaidListPresenter: React.FC<
  LoadableViewModel<PaidListViewModel>
> = model => {
  if (model.status == "Loading") {
    return <p>Loading</p>;
  } else {
    // TODO: JSON.stringifyはあくまで仮
    return (
      <PaidListFrame>
        <p>有給リスト</p>
        {JSON.stringify(model.data)}
      </PaidListFrame>
    );
  }
};
