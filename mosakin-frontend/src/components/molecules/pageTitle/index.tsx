import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { Icon } from "../../atoms/icon";

export interface PageTitleProps {
  title: string;
}

const InnerDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  :first-of-type {
    margin-right: 27px;
  }
`;

export const PageTitle = (props: PageTitleProps) => (
  <div>
    <InnerDiv>
      <Icon name="pageTitle"></Icon>
    </InnerDiv>
    <InnerDiv>
      <Caption lv="h3">{props.title}</Caption>
    </InnerDiv>
  </div>
);
