import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "@emotion/styled";
import { css } from "emotion";
import { Modal, useModalClose } from ".";

const contentClass = css`
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  background-color: white;
  width: 500px;
  height: 500px;
  margin: 8% auto;
`;

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
      <Modal
        contentClass={contentClass}
        isOpen={isOpen}
        onClose={(): void => toggle(false)}
      >
        <ModalContent></ModalContent>
      </Modal>
    </>
  );
};

storiesOf("organisms/Modal", module).add("ModalTest", () => <ModalTest />);
