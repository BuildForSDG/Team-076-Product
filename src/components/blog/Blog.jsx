import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { posts } from "./MockPosts";

const Blog = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.blogPost);
  //const [post, setPost] = useState(posts);
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
      pl={{sm:"1px",md:"30px"}}
      pr={{sm:"1px",md:"30px"}}
    >
      <Box pb={{sm:"30px", lg:"10px"}} className={styles.boxstyle} gridColumn={{sm: "1/13", lg: "1/8" }}>
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
            focusBorderColor="fgreen.800"
            type="text"
            placeholder="Search"
          />
        </InputGroup>
        <Grid display={{sm: "none", lg:"grid"}} templateColumns="repeat(3, 1fr)" gap={8} >
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

      <Box className={styles.boxstyle} gridColumn={{sm: "1/13", lg: "8/13" }}>
        <Stack pt="30px" spacing={20}>
          <strong color="blueblack" className={styles.headtext}>
            Connect
          </strong>
        </Stack>
      </Box>

      <Box mb="40px" pb="30px" className={styles.boxstyle} gridColumn={{sm: "1/13", lg: "1/8" }}>
        <Stack pt="30px">
          <strong color="blueblack" className={styles.headtext}>
            Recent
          </strong>
          <BlogPostsList posts={blogPosts} />
        </Stack>
      </Box>

      <Box mb="40px" pb="30px" className={styles.boxstyle} gridColumn={{sm: "1/13", lg: "8/13" }}>
        <Stack pt="30px" spacing={20}>
          <strong className={styles.headtext}>Success stories</strong>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Blog;
