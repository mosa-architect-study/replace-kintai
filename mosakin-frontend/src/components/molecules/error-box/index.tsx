import * as React from "react";
import styled from "@emotion/styled";
import { Text } from "@/components/atoms/text";
import { paletteDict } from "@/common/theme";
import { ErrorObject, errorMessageDictionary } from "@/models/error";

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
          ・{errorMessageDictionary[err.content]}
        </Text>
      ))}
    </StyledDiv>
  ) : (
    <></>
  );
