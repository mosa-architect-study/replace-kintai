import { Modal, useModalClose } from ".";
import React from "react";
import styled from "@emotion/styled";

export default {
  title: "Modal"
};

const Button = styled.button`
  background-color: #00cccc;
  color: white;
  padding: 8px;
  margin: 5px;
  border-radius: 5px;
  outline: none;
  :active {
    background-color: #00aaaa;
  }
`;

const ModalContentWapper = styled.section`
  background-color: white;
  width: 500px;
  height: 500px;
  margin: 8% auto;
`;

const ModalContent = () => {
  const close = useModalClose();
  console.log("render modal content");
  return (
    <ModalContentWapper>
      <h3>Modal</h3>
      <Button onClick={close}>Close</Button>
    </ModalContentWapper>
  );
};

export const modalTest = (): JSX.Element => {
  const [isOpen, _toggle] = React.useState(false);
  const toggle = (boo: boolean) => {
    console.log("modal change", boo);
    _toggle(boo);
  };
  return (
    <>
      <Button onClick={(): void => toggle(true)}>Open</Button>
      <Modal isOpen={isOpen} onClose={(): void => toggle(false)}>
        <ModalContent></ModalContent>
      </Modal>
    </>
  );
};
