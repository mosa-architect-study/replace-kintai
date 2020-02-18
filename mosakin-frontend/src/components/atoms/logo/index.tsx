import React from "react";
import styled from "@emotion/styled";
import brand from "@/static/logo_fixme.svg";

const StyledLogo = styled.img`
  padding: 8px 0;
  height: 70px;
`;

export const Logo: React.FC = () => <StyledLogo src={brand}></StyledLogo>;
