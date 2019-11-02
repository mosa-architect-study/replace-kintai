import styled from "@emotion/styled";
import React from "react";
import { paletteDist, PcFontSize, SpFontSize } from "@/common/theme";

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export const InnerTextArea = styled.textarea`
  width: 341px;
  height: 86px;
  resize: both;
  background: ${paletteDist.white};
  border: 1px solid #dadadf;
  border-radius: 5px;
  color: ${paletteDist.black};
  font-size: ${PcFontSize.base};
  @media (max-width: 480px) {
    font-size: ${SpFontSize.base};
  }
`;

export const TextArea = (props: TextAreaProps): JSX.Element => (
  <InnerTextArea
    value={props.value}
    onChange={(e): void => props.onChange(e.target.value)}
  ></InnerTextArea>
);
