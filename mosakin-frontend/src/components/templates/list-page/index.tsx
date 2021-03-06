import React from "react";
import styled from "@emotion/styled";
import { bp } from "@/common/theme";
import { LoadableViewModel } from "../../../models/common";
import { PaidListViewModel } from "../../../models/paidList";
import { PaidListHeader } from "../../organisms/paidListHeader";
import { PaidListRows } from "../../organisms/paidListRows";
import { PageTitle } from "../../molecules/pageTitle";
import { Loading } from "@/components/molecules/loading";

const OuterDiv = styled.div`
  width: 603px;
  margin: auto;
  @media (max-width: ${bp}) {
    width: 90%;
    margin: auto;
  }
`;

const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 38px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 38px;
`;

/**
 *
 * ViewModelを描画するReact Component
 * Presentationalなコンポーネントの中で最も上位に位置し、
 * 細々としたコンポーネントを束ね、Viewを構成する。
 *
 * @param model ViewModel
 */
export const PaidListTemplate: React.FC<LoadableViewModel<
  PaidListViewModel
>> = model => {
  if (model.status == "Loading") {
    return <Loading />;
  } else {
    // TODO: JSON.stringifyはあくまで仮
    return (
      <OuterDiv>
        <TitleArea>
          <PageTitle title="有給取得一覧"></PageTitle>
        </TitleArea>
        <HeaderWrapper>
          <PaidListHeader {...model.data.header}></PaidListHeader>
        </HeaderWrapper>
        <PaidListRows rows={model.data.list}></PaidListRows>
      </OuterDiv>
    );
  }
};
