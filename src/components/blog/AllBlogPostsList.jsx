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
      pl={{sm:"1px",md:"30px"}}
      pr={{sm:"1px",md:"30px"}}
    >
      <Box
        className={styles.boxstyle}
        mb="50px"
        pt="10px"
        pb="40px"
        pr={{sm: "20px", lg: "40px"}}
        pl={{sm: "20px", lg: "40px"}}
        gridColumn={{sm: "1/13", lg: "1/8"}}
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
