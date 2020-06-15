import React from "react";

export const useHoge = (
  init: boolean
): { flg: boolean; toggle: () => void } => {
  const [flg, setFlg] = React.useState(init);
  return {
    flg,
    toggle: (): void => setFlg(prev => !prev),
  };
};
