import * as React from "react";
import styled from "@emotion/styled";
import { Text } from "@/components/atoms/text";
import { bp, paletteDict } from "@/common/theme";

interface ErrorObject {
  content: string;
}

export interface ErrorBoxProps {
  errors: ErrorObject[];
}

const StyledDiv = styled.div`
  border: solid 1px ${paletteDict.red};
  color: ${paletteDict.red};
  padding: 12px;
  width: 500px;
`;

export const ErrorBox: React.FC<ErrorBoxProps> = ({ errors }) =>
  errors.length ? (
    <StyledDiv>
      {errors.map((err, index) => (
        <Text key={index} size="0">
          ・{err.content}
        </Text>
      ))}
    </StyledDiv>
  ) : (
    <></>
  );
