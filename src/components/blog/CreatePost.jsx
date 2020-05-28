import React from "react";
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
import styles from "./Blog.module.css";

const CreatePost = () => {
  return (
    <Grid
      autoRows="auto"
      templateColumns="repeat(12, 1fr)"
      gap={4}
      className={styles.container}
      pt="30px"
      pl="30px"
      pr="30px"
    >
      <Box
        className={styles.boxstyle}
        mb="50px"
        pt="10px"
        pb="40px"
        gridColumn="1/8"
      >
        <Stack pt="30px" spacing={8}>
          <strong color="blueblack" className={styles.headtext}>
            Create post
          </strong>
          <FormControl mt="40px">
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              // ref={(initialRef, register({ validate: validateName }))}
              width="90%"
              placeholder="Title of your post here"
            />
            <FormErrorMessage>
              {/* {errors.phone && errors.phone.message} */}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Content</FormLabel>
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
              ml="90px"
              className={styles.navbutton}
              bg="green.900"
              variantColor="green"
              // isDisabled={!formState.dirty}
              type="submit"
            >
              Post
            </Button>
          </Grid>
        </Stack>
      </Box>
      <Box
        className={styles.boxstyle}
        mb="50px"
        pt="10px"
        pb="40px"
        gridColumn="8/13"
      >
        <Stack pt="30px" spacing={8}>
          <strong color="blueblack" className={styles.headtext}>
            Ask a question
          </strong>
          <FormControl mt="30px">
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
              bg="green.900"
              variantColor="green"
              // isDisabled={!formState.dirty}
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
