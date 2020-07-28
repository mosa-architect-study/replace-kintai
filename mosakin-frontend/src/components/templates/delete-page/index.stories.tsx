import React from "react";
import { storiesOf } from "@storybook/react";
import { DeletePage } from ".";
import { Modal } from "@/components/organisms/modal";
import { Button } from "@/components/atoms/button";
import { action } from "@storybook/addon-actions";
import { DeletePaidItem } from "@/models/DeletePaid";

storiesOf("templates/DeletePage", module).add("DeletePage", () => (
  <DeleteModal />
));

storiesOf("templates/DeletePage", module).add("DeletePage(admin)", () => (
  <AdminDeleteModal />
));

const DeleteModalContent = () => {
  const userData: DeletePaidItem = {
    paidId: "1",
    userName: "名前",
    paidTimeValue: "AM",
    dateValue: "20200505",
    reasonValue: "休む",
    reasonOnChange: action("Change: reason"),
    adminFlg: false,
  };
  return (
    <section>
      <DeletePage
        data={userData}
        onSubmit={action("Click: Submit")}
        errors={[]}
      />
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
  const userData: DeletePaidItem = {
    paidId: "1",
    userName: "名前",
    paidTimeValue: "ALL_DAY",
    dateValue: "20200505",
    reasonValue: "休む",
    reasonOnChange: action("Change: reason"),
    adminFlg: true,
  };
  return (
    <section>
      <DeletePage
        data={userData}
        onSubmit={action("Click: Submit")}
        errors={[]}
      />
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
