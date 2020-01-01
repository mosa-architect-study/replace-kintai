import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";
import * as Constant from "./constant";
import { Text } from "../../atoms/text";
import { Icon } from "../../atoms/icon";
import { IconList } from "../../atoms/icon/constant";

interface PullDownProps {
  color: Constant.PullDownFontColorType;
  backgroundColor: Constant.PullDownBackColorType;
}

const StyledPullDownUser = styled.div`
  width: 259px;
  height: 57px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px 3px 0px 0px;
  @media (max-width: 480px) {
    width: 433px;
    height: 66px;
    border-radius: 0px;
  }
`;

const PullDownUser = styled(StyledPullDownUser)<PullDownProps>`
  color: ${({ color }) => paletteDict[Constant.PullDownFontColor[color]]};
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
`;

export const PullDownUserItem = (props: { value: string }): JSX.Element => {
  return (
    <>
      <PullDownUser color="1" backgroundColor="1">
        <Text size="1" color="2">
          {props.value}
        </Text>
      </PullDownUser>
    </>
  );
};

const StyledPullDownMenu = styled.li`
  width: 259px;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 15%;
  border-radius: 3px;
  @media (max-width: 480px) {
    width: 433px;
    height: 64px;
    padding: 0 25%;
  }
  &:hover {
    background-color: ${paletteDict.accent};
    transition-duration: 0.5s;
  }
`;

const PullDownMenu = styled(StyledPullDownMenu)<PullDownProps>`
  color: ${({ color }) => paletteDict[Constant.PullDownFontColor[color]]};
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
`;

export const PullDownMenuItem = (props: {
  value: string;
  name: IconList;
}): JSX.Element => {
  return (
    <>
      <PullDownMenu color="1" backgroundColor="1">
        <PullDownIconWrapper>
          <Icon name={props.name} />
        </PullDownIconWrapper>
        <Text size="1" color="2">
          {props.value}
        </Text>
      </PullDownMenu>
    </>
  );
};

export const PullDownWrapper = styled.div`
  background-color: ${paletteDict.base};
  width: 259px;
  border-radius: 3px;
  list-style: none;
  @media (max-width: 480px) {
    width: 433px;
    height: 195px;
  }
`;

const PullDownIconWrapper = styled.div`
  padding-right: 7%;
  line-height: 0;
`;

export const PullDownBorder = styled.div`
  width: 259px;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    width: 433px;
  }
  &:before {
    content: "";
    background: ${paletteDict.white};
    height: 1px;
    width: 85%;
    bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
