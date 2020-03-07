import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { Toggles } from "../../molecules/toggles";

export interface PaidTimeTypeProps {
  value: string;
  onClick: (value: string) => void;
}

const TitleDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 480px) {
    display: block;
    margin-bottom: 18px;
  }
`;
const InputDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;
const OuterDiv = styled.div`
  max-width: 479px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    display: block;
  }
`;

export const PaidTimeType = (props: PaidTimeTypeProps) => (
  <OuterDiv>
    <TitleDiv>
      <Caption lv="h2" color="1">
        有給時間種別
      </Caption>
    </TitleDiv>
    <InputDiv>
      <Toggles
        options={[
          {
            value: "ALL_DAY",
            label: "全日",
            size: "1"
          },
          {
            value: "AM",
            label: "午前",
            size: "1"
          },
          {
            value: "PM",
            label: "午後",
            size: "1"
          }
        ]}
        value={props.value}
        onClick={props.onClick}
      ></Toggles>
    </InputDiv>
  </OuterDiv>
);
