import React from "react";
import { Flex, Avatar, Box, Text, Badge } from "@chakra-ui/core";

const BlogPostsListItem = (props) => {
  const { post } = props;
  return (
    <Flex pt="25px">
      <Avatar src={post.authorImg} />
      <Box mt="-15px" ml="3">
        <Text color="blueblack" fontWeight="bold">
          {post.title}
          <Badge ml="1" variantColor="green">
            New
          </Badge>
        </Text>
        <Text fontSize="sm">{post.content}</Text>
      </Box>
    </Flex>
  );
};

export default BlogPostsListItem;
