import * as React from "react";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";

interface SelectBoxProps {
  list: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

const StyledSelectBoxWrapper = styled.div`
  position: relative;
  display: block;
  &:after {
    content: "▼";
    position: absolute;
    width: 6px;
    height: 6px;
    top: 20%;
    left: 130px;
    color: ${paletteDict.accent};
    cursor: pointer;
  }
`;

const StyledSelectBox = styled.select`
  width: 160px;
  padding: 8px 13px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid ${paletteDict.border};
  border-radius: 10px;
  color: ${paletteDict.black};
  line-height: 1.3;
  cursor: pointer;
`;

export const SelectBox: React.FC<SelectBoxProps> = props => {
  const { list, value, onChange } = props;
  return (
    <StyledSelectBoxWrapper>
      <StyledSelectBox value={value} onChange={e => onChange(e.target.value)}>
        {list.map(listData => (
          <option key={listData.value} value={listData.value}>
            {listData.label}
          </option>
        ))}
      </StyledSelectBox>
    </StyledSelectBoxWrapper>
  );
};
