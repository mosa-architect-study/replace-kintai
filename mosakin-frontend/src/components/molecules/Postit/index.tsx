import React from "react";
import styled from "@emotion/styled";
import * as Constant from "./constant";
import { paletteDict } from "@/common/theme";
import { Text } from "../../atoms/text";
import { Caption } from "../../atoms/caption";

interface PostitSizeProps {
  width: Constant.PostitSizeType;
}

interface PostitProps {
  value: string;
  width: Constant.PostitSizeType;
  paid: string;
}

const StyledPostit = styled.div<PostitSizeProps>`
  background: ${paletteDict.white};
  width: ${({ width }): string => Constant.PcPostitWidth[width]};
  height: 92px;
  border: 1px solid ${paletteDict.border};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 480px) {
    height: 82px;
    width: ${({ width }) => Constant.SpPostitWidth[width]};
  }
`;

const PinRound = styled.div`
  width: 13px;
  height: 13px;
  background: ${paletteDict.base};
  border: 1px solid ${paletteDict.border};
  box-sizing: border-box;
  border-radius: 50%;
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

const PinBorder = styled.div`
  width: 3.37px;
  height: 0px;
  border: 1px solid ${paletteDict.black};
  transform: matrix(0.8, -1.2, 0.3, 0.8, -4, -1.2);
  @media (max-width: 480px) {
    transform: matrix(0.8, -1, 0.1, 0.5, -3, -1.2);
  }
`;

const Pin = (): JSX.Element => {
  return (
    <>
      <PinRound />
      <PinBorder />
    </>
  );
};

const PinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  @media (max-width: 480px) {
    margin-top: 15%;
  }
`;

export const Postit = (props: PostitProps): JSX.Element => (
  <StyledPostit width={props.width}>
    <PinWrapper>
      <Pin />
    </PinWrapper>
    <PostitWrapper>
      <Caption color="2" lv="h4">
        {props.value}
      </Caption>
      <Text color="1" size="1">
        {props.paid}日
      </Text>
    </PostitWrapper>
  </StyledPostit>
);
