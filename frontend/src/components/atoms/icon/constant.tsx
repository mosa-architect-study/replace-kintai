type IconSize = "l" | "s";

export interface IconProps {
  size: IconSize;
}

export const iconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  l: "30px",
  s: "40px"
};
