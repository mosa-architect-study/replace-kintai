import React from "react";
import styled from "@emotion/styled";
import { Icon } from "@/components/atoms/icon";
import { IconList } from "@/components/atoms/icon/constant";
import { Text } from "@/components/atoms/text";
import { paletteDict } from "@/common/theme";

export const NavigationMenu = (props: { value: string; name: IconList }) => {
  return (
    <>
      <PcNavigationMenu value={props.value} />
      <SpNavigationMenu value={props.value} name={props.name} />
    </>
  );
};

const PcNavigationMenu = (props: { value: string }) => {
  return (
    <>
      <PcNavigationMenuWrapper>
        <Text size="1">{props.value}</Text>
      </PcNavigationMenuWrapper>
    </>
  );
};

const PcNavigationMenuWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  text-decoration: none;
  color: ${paletteDict.white};
  @media (max-width: 480px) {
    display: none;
  }
`;

const SpNavigationMenu = (props: { value: string; name: IconList }) => {
  return (
    <>
      <SpNavigationMenuWrapper>
        <Icon name={props.name} width="l" height="l" />
        <Text size="0">{props.value}</Text>
      </SpNavigationMenuWrapper>
    </>
  );
};

const SpNavigationMenuWrapper = styled.div`
  display: none;
  color: ${paletteDict.white};
  @media (max-width: 480px) {
    display: grid;
    height: 100%;
    align-items: center;
  }
`;
