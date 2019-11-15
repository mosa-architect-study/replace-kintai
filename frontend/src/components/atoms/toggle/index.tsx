import React from "react";
import { Text } from "../text";
import { paletteDict } from "@/common/theme";
import styled from "@emotion/styled";

interface Toggleprops {
  value: string;
  id: string;
  group: string;
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  height: 44px;
  border-top: solid 1px #dadadf;
  border-bottom: solid 1px #dadadf;
  border-right: solid 1px #dadadf;
  background-color: #ffffff;
  color: #868181;
  /* padding: 10px 0; */
  input:checked + span {
    background-color: ${paletteDict.light};
  }
  &#right {
    border-radius: 30px 0 0 30px;
  }
  &#left {
    border-radius: 0 30px 30px 0;
  }
`;

const Span = styled.span`
  /* padding: 10px 20px; */
  &#right {
    border-radius: 30px 0 0 30px;
  }
  &#left {
    border-radius: 0 30px 30px 0;
  }
`;

const Toggle = (props: Toggleprops): JSX.Element => (
  <Label id={props.id}>
    <Input type="radio" name={props.group}></Input>
    <Span id={props.id}>{props.value}</Span>
  </Label>
);

export { Toggle };
