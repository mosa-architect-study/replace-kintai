import React from "react";
import { useDeletePaid } from "@/hooks/useDeletePaid";
import { useModal } from "@/hooks/useModal";
import { DeletePage } from "@/components/templates/delete-page";
import { Modal } from "../organisms/modal";

export const DeletePaidPage: React.FC = () => {
  const model = useDeletePaid();
  const modalState = useModal();

  return (
    <div>
      <Modal
        isOpen={modalState.isModalOpen}
        onClose={() => modalState.setModalState(false)}
      >
        <section>
          <DeletePage
            data={model.data}
            errors={model.errors}
            onSubmit={model.onSubmit}
          ></DeletePage>
        </section>
      </Modal>
    </div>
  );
};
