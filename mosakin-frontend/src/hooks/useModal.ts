import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setModalState] = useState(false);
  return { isModalOpen, setModalState };
};
