import React, { useState } from "react";
import {
  Grid,
  Box,
  Stack,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
} from "@chakra-ui/core";
import styles from "./Blog.module.css";
import cx from "classnames";
import BlogPostsList from "./BlogPostsList";

const posts = [
  {
    id: "1",
    title: "Reducing pest infestation in cereals and boosting output",
    authorImg: "https://bit.ly/sage-adebayo",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give  you a complete account of the system, and expound the actual you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
  },
  {
    id: "2",
    title: "Best practices in fish farming",
    authorImg: "https://bit.ly/sage-adebayo",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give  you a complete account of the system, and expound the actual you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
  },
  {
    id: "3",
    title: "Markerting your produce on Farmapp",
    authorImg: "https://bit.ly/sage-adebayo",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give  you a complete account of the system, and expound the actual you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
  },
  {
    id: "4",
    title: "Reducing pest infestation in cereals and boosting output 2",
    authorImg: "https://bit.ly/sage-adebayo",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give  you a complete account of the system, and expound the actual you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
  },
];

const Blog = () => {
  const [post, setPost] = useState(posts);
  // const handleCreatePost = (newPost) => {
  //     newPost.id = "70";
  //     setPost(post => [...post, newPost]);
  // }
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
      <Box className={styles.boxstyle} gridColumn="1/8">
        <h1 color="blueblack" className={styles.centertext}>
          Welcome to the <br />
          <span className={styles.green}>Farmapp</span> community
        </h1>
        <InputGroup w="" justifyContent="center">
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input
            color="grey"
            focusBorderColor="green.800"
            type="text"
            placeholder="Search"
          />
        </InputGroup>
        <Grid templateColumns="repeat(3, 1fr)" gap={8} pt="10px">
          <Box className={styles.centertext}>
            <Stack spacing={-8}>
              <Text color="blueblack" fontWeight="bold" fontSize="5xl">
                80
              </Text>
              <Text fontSize="2xl">Questions</Text>
            </Stack>
          </Box>
          <Box className={styles.centertext}>
            <Stack spacing={-8}>
              <Text color="blueblack" fontWeight="bold" fontSize="5xl">
                42
              </Text>
              <Text fontSize="2xl">Solutions</Text>
            </Stack>
          </Box>
          <Box className={styles.centertext}>
            <Stack spacing={-8}>
              <Text color="blueblack" fontWeight="bold" fontSize="5xl">
                30
              </Text>
              <Text fontSize="2xl">New</Text>
            </Stack>
          </Box>
        </Grid>
      </Box>

      <Box className={styles.boxstyle} gridColumn="8/13">
        <Stack pt="30px" spacing={20}>
          <strong color="blueblack" className={styles.headtext}>
            Connect
          </strong>
        </Stack>
      </Box>

      <Box mb="40px" pb="30px" className={styles.boxstyle} gridColumn="1/8">
        <Stack pt="30px">
          <strong color="blueblack" className={styles.headtext}>
            Recent
          </strong>
          <BlogPostsList posts={posts} />
        </Stack>
      </Box>

      <Box mb="40px" pb="30px" className={styles.boxstyle} gridColumn="8/13">
        <Stack pt="30px" spacing={20}>
          <strong className={styles.headtext}>Success stories</strong>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Blog;
