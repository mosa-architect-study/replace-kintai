import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";
import * as Constant from "./constant";
//import { Text, TextSize } from "../../atoms/text";

// アイコン(色変更方法, サイズ追加？)
// テキスト(色/サイズ追加？)(ユーザ名(admin)の部分)
// 開いて閉じて
// ていうかなんかいろいろあれ

interface PullDownProps {
  color: Constant.PullDownFontColorType;
  backgroundColor: Constant.PullDownBackColorType;
  borderRadius: Constant.PullDownBordeRadiusType;
}

const PullDownUserStyle = styled.div`
  width: 259px;
  height: 57px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 433px;
    height: 66px;
  }
  &:after {
    content: "";
    background: ${paletteDict.white};
    height: 1px;
    width: 85%;
    bottom: 0;
    align-self: flex-end;
  }
`;

// ${name}？ useState？
export const PullDownUser = styled(PullDownUserStyle)<PullDownProps>`
  color: ${({ color }) => paletteDict[Constant.PullDownFontColor[color]]};
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
  border-radius: ${({ borderRadius }) => [
    [Constant.PullDownBorderRadius[borderRadius]]
  ]};
`;

const PullDownMenuStyle = styled.div`
  width: 259px;
  height: 46px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 433px;
    height: 64px;
  }
  &:hover {
    background-color: ${paletteDict.accent};
    transition-duration: 0.5s;
  }
`;

export const PullDownMenu = styled(PullDownMenuStyle)<PullDownProps>`
  color: ${({ color }) => paletteDict[Constant.PullDownFontColor[color]]};
  background-color: ${({ backgroundColor }) =>
    paletteDict[Constant.PullDownBackColor[backgroundColor]]};
  border-radius: ${({ borderRadius }) => [
    [Constant.PullDownBorderRadius[borderRadius]]
  ]};
`;

// export const PullDownWrapper = (): JSX.Element => {};