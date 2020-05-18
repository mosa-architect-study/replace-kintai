import mosakin from "../../static/mosakin.png";
import React from "react";
import styled from "@emotion/styled";

const MosakinHouse = styled.img`
  height: 400px;
`;

const NotFoundTitle = styled.p`
  font-size: 50px;
`;

const NotFoundWrapper = styled.main`
  text-align: center;
  padding-top: 20px;
`;

export const NotFoundPage: React.FC = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>Not Found</NotFoundTitle>
      <MosakinHouse src={mosakin}></MosakinHouse>
    </NotFoundWrapper>
  );
};
