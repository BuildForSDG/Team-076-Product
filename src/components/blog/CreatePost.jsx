import React, { useRef } from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Stack,
  Textarea,
  Button,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import styles from "./Blog.module.css";
import { useDispatch } from "react-redux";
import { addPost } from "./blogActions";

const CreatePost = () => {
  const { register, handleSubmit, formState, errors } = useForm();
  const initialRef = useRef();
  const dispatch = useDispatch();

  const validateInput = (value) => {
    let error;
    if (!value) {
      error = "Field is required";
    }
    return error || true;
  };

  const onSubmit = (data) => {
    dispatch(addPost(data));
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Grid
      autoRows="auto"
      templateColumns="repeat(12, 1fr)"
      gap={4}
      className={styles.container}
      pt="30px"
      pl={{sm:"1px",md:"30px"}}
      pr={{sm:"1px",md:"30px"}}
    >
      <Box
        className={styles.boxstyle}
        mb="50px"
        pt="10px"
        pb="40px"
        gridColumn={{sm: "1/13", lg: "1/8" }}
      >
        <Stack pt="30px" spacing={8}>
          <strong color="blueblack" className={styles.headtext}>
            Create post
          </strong>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="40px">
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                ref={(initialRef, register({ validate: validateInput }))}
                width="90%"
                placeholder="Title of your post here"
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt="20px">
              <FormLabel>Content</FormLabel>
              <Textarea
                // value={value}
                // onChange={handleInputChange}
                name="content"
                placeholder="Here is a sample placeholder"
                ref={register({ validate: validateInput })}
                // size="sm"
                width="90%"
                h="200px"
              />
            </FormControl>
            <Grid templateColumns="repeat(3, 1fr)" gap={8} pt="10px">
              <Button
                //onClick={()=>dispatch(closeModal())}
                gridColumn="3"
                width="40%"
                ml="90px"
                className={styles.navbutton}
                bg="fgreen.900"
                variantColor="green"
                isDisabled={!formState.dirty}
                type="submit"
              >
                Post
              </Button>
            </Grid>
          </form>
        </Stack>
      </Box>

      <Box
        className={styles.boxstyle}
        mb="50px"
        pt="10px"
        pb="40px"
        gridColumn={{sm: "1/13", lg: "8/13" }}
      >
        <Stack pt="30px" spacing={8}>
          <strong color="blueblack" className={styles.headtext}>
            Ask a question
          </strong>
          <FormControl mt="40px">
            <FormLabel>Question</FormLabel>
            <Textarea
              // value={value}
              // onChange={handleInputChange}
              placeholder="Here is a sample placeholder"
              // size="sm"
              width="90%"
              h="200px"
            />
          </FormControl>
          <Grid templateColumns="repeat(3, 1fr)" gap={8} pt="10px">
            <Button
              //onClick={()=>dispatch(closeModal())}
              gridColumn="3"
              width="40%"
              ml="70px"
              className={styles.navbutton}
              bg="fgreen.900"
              variantColor="green"
              isDisabled={!formState.dirty}
              type="submit"
            >
              Ask
            </Button>
          </Grid>
        </Stack>
      </Box>
    </Grid>
  );
};

export default CreatePost;
