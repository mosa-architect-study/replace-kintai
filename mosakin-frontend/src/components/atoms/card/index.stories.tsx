import { Card } from ".";
import React from "react";
import styled from "@emotion/styled";

export default {
  title: "atoms/Card"
};

const Content = styled.div`
  width: 200px;
  height: 200px;
`;

const Wrapper = styled.section`
  width: 200px;
  height: 200px;
  padding: 10px;
`;

export const sample = (): JSX.Element => (
  <Wrapper>
    <Card>
      <Content>a</Content>
    </Card>
  </Wrapper>
);
