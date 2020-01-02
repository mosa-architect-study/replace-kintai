import React from "react";
import { LoadableViewModel } from "../../models/models/common";
import { PaidListViewModel } from "../../models/models/paidList";
import styled from "@emotion/styled";

const PaidListFrame = styled.section`
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
export const PaidListTemplate: React.FC<
  LoadableViewModel<PaidListViewModel>
> = model => {
  if (model.status == "Loading") {
    return <p>Loading</p>;
  } else {
    // TODO: JSON.stringifyはあくまで仮
    return (
      <PaidListFrame>
        <p>有給リスト</p>
        <p>{JSON.stringify(model.data)}</p>
      </PaidListFrame>
    );
  }
};
