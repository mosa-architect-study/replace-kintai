import styled from "@emotion/styled";
import React from "react";
import { paletteDict, PcFontSizeDict, SpFontSizeDict } from "@/common/theme";

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const InnerTextArea = styled.textarea`
  width: 479px;
  height: 76px;
  resize: both;
  background: ${paletteDict.white};
  border: 1px solid #dadadf;
  border-radius: 5px;
  color: ${paletteDict.black};
  font-size: ${PcFontSizeDict.base};
  @media (max-width: 480px) {
    font-size: ${SpFontSizeDict.base};
    width: 341px;
    height: 86px;
  }
`;

export const TextArea = (props: TextAreaProps) => (
  <InnerTextArea
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
  ></InnerTextArea>
);
