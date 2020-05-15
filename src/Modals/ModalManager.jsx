import React from "react";
import { useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const modalLookup = {
  LoginModal,
  RegisterModal,
};

const ModalManager = () => {
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default ModalManager;
