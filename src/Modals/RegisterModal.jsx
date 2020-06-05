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
  FormErrorMessage,
  useToast,
} from "@chakra-ui/core";
import styles from "./Modals.module.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const RegisterModal = () => {
  const { register, handleSubmit, formState, errors } = useForm();

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "You cannot leave this field empty";
    }
    return error || true;
  };

  const toast = useToast();

  const showToast = () =>{
    return toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
    });
  };

  const history = useHistory();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    closemodal();
    history.push("/blog");
    showToast();
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader pt={5}>Create a free account</ModalHeader>
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                ref={(initialRef, register({ validate: validateName }))}
                width="90%"
                placeholder="Enter your name here"
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.farmingtype}>
              <FormLabel>Farming Type</FormLabel>
              <Select
                name="farmingtype"
                ref={register({ validate: validateName })}
                placeholder="Select option"
                size="lg"
              >
                <option value="livestock">Livestock</option>
                <option value="crops">crops</option>
                <option value="mixed">Mixed(crops and animals)</option>
              </Select>
              <FormErrorMessage>
                {errors.farmingtype && errors.farmingtype.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.phone}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                ref={register({ validate: validateName })}
                name="phone"
                width="90%"
                placeholder="+90348230984"
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                width="90%"
                ref={register({ validate: validateName })}
                placeholder="**********"
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter alignItems="center">
            <Button
              className={styles.navbutton}
              bg="fgreen.900"
              variantColor="green"
              mr={3}
              isDisabled={!formState.dirty}
              type="submit"
            >
              Register
            </Button>
            <Button className={styles.navbutton} onClick={closemodal}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
