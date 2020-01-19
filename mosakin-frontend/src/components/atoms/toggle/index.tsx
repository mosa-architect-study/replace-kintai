import React from "react";
import { Text, TextSize } from "../text";
import { paletteDict } from "@/common/theme";
import styled from "@emotion/styled";

interface Toggleprops {
  label: string;
  size: TextSize;
  selected: boolean;
  onClick: () => void;
}

interface Labelprops {
  selected: boolean;
}

const TextWrapper = styled.div`
  text-align: center;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label<Labelprops>`
  display: inline-block;
  width: 85px;
  padding: 5px 0;
  border-top: solid 1px ${paletteDict.border};
  border-bottom: solid 1px ${paletteDict.border};
  border-right: solid 1px ${paletteDict.border};
  background-color: ${({ selected }): string =>
    selected ? paletteDict.light : paletteDict.white};
  color: ${paletteDict.black};
  cursor: pointer;
  :first-child {
    border-radius: 30px 0 0 30px;
  }
  :last-child {
    border-radius: 0 30px 30px 0;
  }
  :hover {
    background-color: ${({ selected }): string =>
      selected ? paletteDict.light : paletteDict.whitesmoke};
  }
`;

const Toggle = (props: Toggleprops): JSX.Element => (
  <Label selected={props.selected} onClick={props.onClick}>
    <Input type="radio"></Input>
    <TextWrapper>
      <Text size={props.size}>{props.label}</Text>
    </TextWrapper>
  </Label>
);

export { Toggle };
