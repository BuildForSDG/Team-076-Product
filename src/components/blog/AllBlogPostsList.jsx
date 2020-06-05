import React from "react";
import { Grid, Box, Stack } from "@chakra-ui/core";
import { posts } from "./MockPosts";
import BlogPostsListItem from "./BlogPostsListItem";
import styles from "./Blog.module.css";

const AllBlogPostsList = () => {
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
        <Stack pt="30px">
          <strong color="blueblack" className={styles.headtext}>
            All Posts
          </strong>
          {posts.map(post =>(
              <BlogPostsListItem key={post.id} post={post}/>
          ))}
        </Stack>
      </Box>
    </Grid>
  );
};

export default AllBlogPostsList;
