import React from "react";
import { Text, TextSize, TextPosition } from "../text";
import styled from "@emotion/styled";

interface Toggleprops {
  value: string;
  size: TextSize;
  group: string;
  position: TextPosition;
  onClick: (value: string) => void;
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: inline-block;
  width: 85px;
  padding: 5px 0;
  border-top: solid 1px #dadadf;
  border-bottom: solid 1px #dadadf;
  border-right: solid 1px #dadadf;
  background-color: #ffffff;
  color: #868181;
  :first-child {
    border-radius: 30px 0 0 30px;
  }
  :last-child {
    border-radius: 0 30px 30px 0;
  }
`;

const Toggle = (props: Toggleprops): JSX.Element => (
  <Label>
    <Input
      type="radio"
      name={props.group}
      onClick={(): void => props.onClick("PUSH")}
    ></Input>
    <Text size={props.size} position={props.position}>
      {props.value}
    </Text>
  </Label>
);

export { Toggle };
