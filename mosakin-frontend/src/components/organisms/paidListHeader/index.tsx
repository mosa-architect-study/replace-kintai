import React from "react";
import { PaidListHeaderViewModel } from "../../../models/models/paidList";
import { Postit } from "../../molecules/Postit";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaidListHeader: React.FC<PaidListHeaderViewModel> = ({
  annualPaidNumber,
  currentPaidAcquisitionNumber,
  leftPaidNumber,
  carryForward
}) => (
  <Wrapper>
    <Postit title="繰越分" number={String(carryForward)} />
    <Postit title="年次有給数" number={String(annualPaidNumber)} />
    <Postit title="残有給数" number={String(leftPaidNumber)} />
    <Postit title="取得数" number={String(currentPaidAcquisitionNumber)} />
  </Wrapper>
);
