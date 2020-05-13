import React, { Component } from "react";
import { closeModal } from "./ModalActions";
import { connect } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/core";

const mapDispatchToProps = {
  closeModal,
};

class LoginModal extends Component {
  render() {
    return (
      <Modal
        size={"md"}
        isOpen={true}
        onClose={this.props.closeModal}
        isCentered={true}
        closeOnOverlayClick={true}
        
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
              Testing the modal
          </ModalBody>
          <ModalFooter>
              foot
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginModal);
