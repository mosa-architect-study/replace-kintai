import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { paletteDict } from "@/common/theme";

const animation = keyframes`
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const StyledLoading = styled.div`
  margin: calc(100vh / 2 - 50px) auto 0;
  text-align: center;
`;

const Item = styled.div<{ delay: string }>`
  width: 50px;
  height: 50px;
  background-color: ${paletteDict.base};

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: ${animation} 1.4s infinite ease-in-out both;
  animation: ${animation} 1.4s infinite ease-in-out both;
  -webkit-animation-delay: ${({ delay }) => delay};
  animation-delay: ${({ delay }) => delay};
`;

export const PageLoading = () => (
  <main>
    <StyledLoading>
      <Item delay="-0.20s"></Item>
      <Item delay="-0.10s"></Item>
      <Item delay="-0s"></Item>
    </StyledLoading>
  </main>
);
