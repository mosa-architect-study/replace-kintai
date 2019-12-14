import React from "react";
import { Text, TextSize } from "../text";
import {paletteDict} from "@/common/theme";
import styled from "@emotion/styled";

interface Toggleprops {
  value: string;
  size: TextSize;
  group: string;
  selected: boolean;
}

interface Labelprops {
  selected: boolean;
}

const TextWrapper = styled.div`
  text-align: center
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
  background-color: ${({selected}):string => selected ? paletteDict.light : paletteDict.white};
  color: ${paletteDict.black};
  :first-child {
    border-radius: 30px 0 0 30px;
  }
  :last-child {
    border-radius: 0 30px 30px 0;
  }
`;

const Toggle = (props: Toggleprops): JSX.Element => (
  <Label selected={props.selected}>
    <Input
      type="radio"
      name={props.group}
    ></Input>
    <TextWrapper>
      <Text size={props.size}>
        {props.value}
      </Text>
    </TextWrapper>
  </Label>
);

export { Toggle };
