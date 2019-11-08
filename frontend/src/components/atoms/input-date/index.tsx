import React from "react";
import { paletteDict } from "@/common/theme";
import styled from "@emotion/styled";

interface InputDateprops {
  value: string;
  onChange: (value: string) => void;
}

const Input = styled.input`
  width: 295px;
  height: 38px;
  background: ${paletteDict.white};
  border: 1px solid ${paletteDict.border};
  border-radius: 5px;
  color: ${paletteDict.black};
  padding: 4px 10px;
`;

const InputDate = (props: InputDateprops): JSX.Element => (
  <Input
    type="date"
    value={props.value}
    onChange={(e): void => props.onChange(e.target.value)}
  ></Input>
);

export { InputDate };
