import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Grid,
  Box,
  Heading,
  Text,
  Flex,
  Avatar,
  FormControl,
  Button,
  Textarea,
  Stack,
  Collapse,
} from "@chakra-ui/core";
import styles from "./Blog.module.css";
import { useEffect } from "react";

//Post content, Comments, suggested posts
const BlogPostDetailed = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("green.900");

  const handleToggle = () => {
    setShow(!show);
    setColor(color == "green.900" ? "grey" : "green.800");
  };

  const { id } = useParams();
  const blogPosts = useSelector((state) => state.blogPost);
  const blogPost = blogPosts.filter((post) => post.id == id);


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
        mb="20px"
        pt="10px"
        pb="40px"
        gridColumn="2/12"
      >
        <Heading mb={4}>{blogPost[0].title}</Heading>
        <Text fontSize="xl">{blogPost[0].content}</Text>
      </Box>

      <Box
        className={styles.boxstyle}
        mb="50px"
        pt="10px"
        pb="40px"
        gridColumn="2/9"
        gridRow="2"
      >
        <Stack>
          <Heading mb={4}>Comments</Heading>
          <Flex pt="25px">
            <Avatar src={blogPost[0].authorImg} />
            <Box mt="-14px" ml="6">
              <FormControl mt="20px">
                <Textarea
                  // value={value}
                  // onChange={handleInputChange}
                  //name="content"
                  placeholder="Write a comment"
                  //ref={register({ validate: validateInput })}
                  size="lg"
                  width="200%"
                  h="130px"
                  resize="vertical"
                />
              </FormControl>
              <Grid templateColumns="repeat(3, 1fr)" gap={8} pt="10px">
                <Button
                  //onClick={()=>dispatch(closeModal())}
                  gridColumn="auto"
                  size="md"
                  //ml="90px"
                  className={styles.navbutton}
                  bg="fgreen.900"
                  variantColor="green"
                  //isDisabled={!formState.dirty}
                  type="submit"
                >
                  Post
                </Button>
              </Grid>
            </Box>
          </Flex>
        </Stack>

        <Flex pt="35px">
          <Avatar src={blogPost[0].authorImg} />
          <Box mt="-14px" ml="3">
            <Text color="blueblack" fontWeight="bold">
              Mark Ruffalo
            </Text>
            <Text fontSize="sm">{blogPost[0].content}</Text>
            <Text cursor="pointer" onClick={handleToggle} color={color}>
              Replies (1)
            </Text>
          </Box>
        </Flex>
        <Collapse isOpen={show}>
          <Flex ml="55px" pt="10px">
            <Avatar src={blogPost[0].authorImg} />
            <Box mt="-14px" ml="3">
              <Text color="blueblack" fontWeight="bold">
                Mark Ruffalo
              </Text>
              <Text fontSize="sm">{blogPost[0].content}</Text>
            </Box>
          </Flex>
        </Collapse>
        <Flex pt="15px">
          <Avatar src={blogPost[0].authorImg} />
          <Box mt="-14px" ml="3">
            <Text color="blueblack" fontWeight="bold">
              Mark Ruffalo
            </Text>
            <Text fontSize="sm">{blogPost[0].content}</Text>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};

export default BlogPostDetailed;
