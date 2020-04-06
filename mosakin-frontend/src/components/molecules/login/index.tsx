import * as React from "react";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import brand from "@/static/logo_fixme.svg";

interface LoginProps {
  onClick: () => void;
}

const StyledLogin = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 60%;
  height: calc(100vh - 2em);
  margin: auto;
  background: linear-gradient(
    ${paletteDict.light},
    ${paletteDict.base},
    ${paletteDict.accent}
  );
  border-radius: 20px;
  box-shadow: 5px 5px ${paletteDict.border};
  ::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 91%;
    width: 9%;
    height: 23%;
    background: linear-gradient(
      to right,
      ${paletteDict.accent},
      ${paletteDict.base},
      ${paletteDict.light}
    );
    border-top-left-radius: 100px 50px;
    border-bottom-left-radius: 100px 50px;
    filter: blur(1px);
  }
  @media (max-width: 480px) {
    width: 90%;
    height: 80%;
  }
`;

const StyledContentsWrapper = styled.div`
  text-align: center;
  margin: 5em 0;
`;

const StyledLogoWrapper = styled.div`
  width: 100%;
  margin-bottom: 40vh;
  @media (max-width: 480px) {
    width: 90%;
    margin-bottom: 25vh;
  }
`;

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { onClick } = props;
  return (
    <StyledLogin>
      <StyledContentsWrapper>
        <StyledLogoWrapper>
          <img src={brand} alt="logo" />
        </StyledLogoWrapper>

        <Button
          backgroundColor="2"
          width="l"
          height="l"
          color="base"
          onClick={onClick}
        >
          <Text color="base" size="1">
            Login
          </Text>
        </Button>
      </StyledContentsWrapper>
    </StyledLogin>
  );
};

export { Login };
