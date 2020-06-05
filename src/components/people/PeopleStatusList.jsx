import React from "react";
import { Flex, Avatar, Box, Text } from "@chakra-ui/core";

const PeopleStatusList = (props) => {
  const { post } = props;
  return (
    <Flex  pt="30px">
      <Avatar src={post.authorImg} />
      <Box mt="-14px" ml="3">
        <Text color="blueblack" fontWeight="bold">
          Mark Ruffalo
        </Text>
        <Text fontSize="sm">{post.content}</Text>
      </Box>
    </Flex>
  );
};

export default PeopleStatusList;
