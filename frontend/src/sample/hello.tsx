import * as React from "react";
import { css } from "@emotion/core";
import "ress";

const style = css({
  color: "blue"
});

export const Hello: React.FC = () => <p css={style}>Hello React</p>;
