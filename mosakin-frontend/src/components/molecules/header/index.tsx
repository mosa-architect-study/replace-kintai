import styled from "@emotion/styled";
import { paletteDict, bp } from "@/common/theme";

export const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  padding-left: 2.5%;
  padding-right: 4%;
  background-color: ${paletteDict.base};
  border-bottom: 1px solid ${paletteDict.white};
  justify-content: space-between;
  align-items: center;
  line-height: 0;
  @media (max-width: ${bp}) {
    height: 80px;
    padding: 0 5%;
  }
`;
