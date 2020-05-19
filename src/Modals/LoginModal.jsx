import React, { useRef, useState } from "react";
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
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import styles from "./Modals.module.css";
import { login } from "../auth/authActions";

const LoginModal = () => {
  //const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handlePasswordToggle = () => setShow(!show);
  const { register, handleSubmit, formState, errors } = useForm();

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "phone number is required";
    }
    return error || true;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error || true;
  };

  const onSubmit = (data) => {
    dispatch(login(data));
    alert(JSON.stringify(data, null, 2));
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
          <ModalHeader pt={5}>Login</ModalHeader>
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.phone}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phone"
                ref={(initialRef, register({ validate: validateName }))}
                width="90%"
                placeholder="+90348230984"
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password} mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  ref={register({ validate: validatePassword })}
                  width="90%"
                />
                <InputRightElement width="4.5rem">
                  <Icon
                    aria-label="view"
                    name="view"
                    onClick={handlePasswordToggle}
                  >
                    {show ? "Hide" : "Show"}
                  </Icon>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter alignItems="center">
            <Button
              //onClick={()=>dispatch(closeModal())}
              className={styles.navbutton}
              bg="green.900"
              variantColor="green"
              mr={3}
              isDisabled={!formState.dirty}
              type="submit"
            >
              Login
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

export default LoginModal;
