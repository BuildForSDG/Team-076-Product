import React from "react";
import { Flex, Avatar, Box, Text, Badge } from "@chakra-ui/core";
import { Link } from 'react-router-dom';

const BlogPostsListItemRecent = (props) => {
  const { post } = props;
  return (
    <Flex pt="25px">
      <Avatar src={post.authorImg} />
      <Box ml="3">
         <Text as={Link} to={`posts/${post.id}`} color="blueblack" fontWeight="bold"  >
          {post.title}
          <Badge ml="1" variantColor="green">
            New
          </Badge>
        </Text>
        <Text display={{sm: "none", md:"flex", lg:"flex"}} fontSize="sm">{post.content}</Text>
      </Box>
    </Flex>
  );
};

export default BlogPostsListItemRecent;
