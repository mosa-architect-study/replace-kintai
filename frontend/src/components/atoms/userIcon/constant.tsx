type IconSize = "l" | "s";

export interface IconProps {
  size: IconSize;
}

export const userIconSizeDict: { [P in IconSize]: string } = {
  //FIX ME どっかで調整する
  l: "62px",
  s: "62px"
};
