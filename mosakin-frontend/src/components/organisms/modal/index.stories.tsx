import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "@emotion/styled";
import { Modal, useModalClose } from ".";

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

const ModalContent = () => {
  const close = useModalClose();
  console.log("render modal content");
  return (
    <section>
      <h3>Modal</h3>
      <Button onClick={close}>Close</Button>
    </section>
  );
};

const ModalTest = (): JSX.Element => {
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

storiesOf("organisms/Modal", module).add("ModalTest", () => <ModalTest />);
