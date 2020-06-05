import React from "react";
import { Grid, Box } from "@chakra-ui/core";
import styles from "./People.module.css"
import { posts } from "../blog/MockPosts";
import PeopleStatusList from "./PeopleStatusList";

function People() {
  return (
    <Grid
      autoRows="auto"
      templateColumns="repeat(12, 1fr)"
      gap={4}
      className={styles.container}
      pt="30px"
      pb="30px"
      pl="30px"
      pr="30px"
    >
      <Box className={styles.boxstyle} gridColumn="4/10">
        {posts.map(post => 
           <PeopleStatusList key={post.id} post={post}/>
        )};
      </Box>
    </Grid>
  );
}

export default People;
