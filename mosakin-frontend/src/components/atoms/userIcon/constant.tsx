type IconSize = "l" | "s";

export interface IconProps {
  url?: string;
}

export const userIconSizeDict: { [P in IconSize]: string } = {
  // FIX ME
  l: "62px",
  s: "62px",
};
