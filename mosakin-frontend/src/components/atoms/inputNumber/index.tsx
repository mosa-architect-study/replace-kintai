import React from "react";
import styled from "@emotion/styled";
import { paletteDict, fontSizeDict, bp } from "@/common/theme";

interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
}

const StyledInputNumber = styled.input`
  width: 295px;
  height: 38px;
  padding: 4px 10px;
  background: ${paletteDict.white};
  border: 1px solid #dadadf;
  border-radius: 5px;
  color: ${paletteDict.black};
  font-size: ${fontSizeDict._20px};
  @media (max-width: ${bp}) {
    width: 244px;
  }
`;

export const InputNumber: React.FC<InputNumberProps> = ({
  value,
  onChange
}) => {
  return (
    <StyledInputNumber
      type="number"
      value={value}
      onChange={e => onChange(parseInt(e.target.value))}
    />
  );
};
