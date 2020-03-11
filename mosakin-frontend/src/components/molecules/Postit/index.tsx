import React from "react";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";
import { Text } from "@/components/atoms/text";
import { Caption } from "@/components/atoms/caption";

interface PostitProps {
  title: string;
  number: string;
}

const StyledPostit = styled.div`
  display: grid;
  min-height: 92px;
  min-width: 130px;
  margin: 0 1px;
  padding: 0 5px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${paletteDict.border};
  background: ${paletteDict.white};
  color: ${paletteDict.black};
  @media (max-width: 480px) {
    min-height: 82px;
    min-width: 60px;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  justify-content: center;
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

const Pin = () => {
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

export const Postit = (props: PostitProps) => (
  <StyledPostit>
    <PinWrapper>
      <Pin />
    </PinWrapper>
    <TextWrapper>
      <Caption color="2" lv="h4">
        {props.title}
      </Caption>
      <Text size="1">{props.number}日</Text>
    </TextWrapper>
  </StyledPostit>
);
