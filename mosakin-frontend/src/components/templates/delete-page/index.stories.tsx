import React from "react";
import { storiesOf } from "@storybook/react";
import { DeleteTemplate } from ".";
import { Modal } from "@/components/organisms/modal";
import { Button } from "@/components/atoms/button";
import { action } from "@storybook/addon-actions";

storiesOf("templates/DeletePage", module).add("DeletePage", () => (
  <DeleteModal />
));

storiesOf("templates/DeletePage", module).add("DeletePage(admin)", () => (
  <AdminDeleteModal />
));

const DeleteModalContent = () => {
  const userData = {
    paidId: "1",
    userName: "名前",
    paidTimeType: "前日",
    paidAcquisitionDate: "20200505",
    paidReason: "休む",
    adminFlg: false
  };
  return (
    <section>
      <DeleteTemplate userData={userData} onSubmit={action("Click: Submit")} />
    </section>
  );
};

const DeleteModal = (): JSX.Element => {
  const [isOpen, _toggle] = React.useState(false);
  const toggle = (boo: boolean) => {
    console.log("modal change", boo);
    _toggle(boo);
  };
  return (
    <>
      <Button
        backgroundColor="1"
        width="s"
        height="s"
        color="white"
        onClick={(): void => toggle(true)}
      >
        Open
      </Button>
      <Modal isOpen={isOpen} onClose={(): void => toggle(false)}>
        <DeleteModalContent />
      </Modal>
    </>
  );
};

const AdminDeleteModalContent = () => {
  const userData = {
    paidId: "1",
    userName: "名前",
    paidTimeType: "前日",
    paidAcquisitionDate: "20200505",
    paidReason: "休む",
    adminFlg: true
  };
  return (
    <section>
      <DeleteTemplate userData={userData} onSubmit={action("Click: Submit")} />
    </section>
  );
};

const AdminDeleteModal = (): JSX.Element => {
  const [isOpen, _toggle] = React.useState(false);
  const toggle = (boo: boolean) => {
    console.log("modal change", boo);
    _toggle(boo);
  };
  return (
    <>
      <Button
        backgroundColor="1"
        width="s"
        height="s"
        color="white"
        onClick={(): void => toggle(true)}
      >
        Open
      </Button>
      <Modal isOpen={isOpen} onClose={(): void => toggle(false)}>
        <AdminDeleteModalContent />
      </Modal>
    </>
  );
};
