import React, { useRef } from "react";
import { closeModal } from "./ModalActions";
import { useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/core";
import styles from "./Modals.module.css";

const RegisterModal = () => {
  const initialRef = useRef();
  const dispatch = useDispatch();
  const closemodal = () => {
    dispatch(closeModal());
  };
  return (
    <Modal
      isOpen={true}
      onClose={closemodal}
      isCentered={true}
      closeOnOverlayClick={true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pt={5}>Create a free account</ModalHeader>
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              ref={initialRef}
              width="90%"
              placeholder="Enter your name here"
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Farming Type</FormLabel>
            <Select placeholder="Select option" size="lg">
              <option value="option1">Livestock</option>
              <option value="option2">crops</option>
              <option value="option3">Mixed(crops and animals)</option>
            </Select>
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input width="90%" placeholder="+90348230984" />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input width="90%" placeholder="**********" />
          </FormControl>
        </ModalBody>

        <ModalFooter alignItems="center">
          <Button
            className={styles.navbutton}
            bg="green.900"
            variantColor="green"
            mr={3}
          >
            Register
          </Button>
          <Button className={styles.navbutton} onClick={closemodal}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
