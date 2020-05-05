import * as React from "react";
import styled from "@emotion/styled";
import { Caption } from "../../atoms/caption";
import { Icon } from "../../atoms/icon";
import { bp } from "@/common/theme";

export interface PageTitleProps {
  title: string;
}

const IconDiv = styled.div`
  display: inline-block;
  margin-right: 27px;
  @media (max-width: ${bp}) {
    margin-right: 20px;
  }
`;
const TitleDiv = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const OuterDiv = styled.div`
  display: inline-block;
`;

export const PageTitle = (props: PageTitleProps) => (
  <OuterDiv>
    <IconDiv>
      <Icon name="pageTitle" width="l" height="l"></Icon>
    </IconDiv>
    <TitleDiv>
      <Caption lv="h2" color="1">
        {props.title}
      </Caption>
    </TitleDiv>
  </OuterDiv>
);
