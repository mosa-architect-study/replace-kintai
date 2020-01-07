export type PostitSizeType = "1" | "2" | "3" | "4";

export const PcPostitWidth: { [P in PostitSizeType]: string } = {
  1: "121px",
  2: "130px",
  3: "139px",
  4: "154px"
};

export const SpPostitWidth: { [P in PostitSizeType]: string } = {
  1: "86px",
  2: "93px",
  3: "100px",
  4: "109px"
};
