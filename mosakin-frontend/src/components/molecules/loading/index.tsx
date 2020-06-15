import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { paletteDict } from "@/common/theme";

const animation = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
`;

const StyledLoading = styled.div`
  margin: 15% auto;
  width: 100px;
  height: 100px;
  position: relative;
`;

const Item = styled.div<{ index: number }>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transform: rotate(${({ index }) => index * 30}deg);
  -ms-transform: rotate(${({ index }) => index * 30}deg);
  transform: rotate(${({ index }) => index * 30}deg);

  :before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${paletteDict.base};
    border-radius: 100%;
    -webkit-animation: ${animation} 1.2s infinite ease-in-out both;
    animation: ${animation} 1.2s infinite ease-in-out both;
    -webkit-animation-delay: -${({ index }) => index * 0.1}s;
    animation-delay: -${({ index }) => index * 0.1}s;
  }
`;

export const Loading = () => (
  <main>
    <StyledLoading>
      <Item index={0}></Item>
      <Item index={1}></Item>
      <Item index={2}></Item>
      <Item index={3}></Item>
      <Item index={4}></Item>
      <Item index={5}></Item>
      <Item index={6}></Item>
      <Item index={7}></Item>
      <Item index={8}></Item>
      <Item index={9}></Item>
      <Item index={10}></Item>
      <Item index={11}></Item>
      <Item index={12}></Item>
    </StyledLoading>
  </main>
);
