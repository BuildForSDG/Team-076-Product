import React from "react";
import {
  Grid,
  Box,
  Divider,
  Stack,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Badge,
  Avatar,
  Flex,
} from "@chakra-ui/core";
import styles from "./Blog.module.css";
import cx from "classnames";

const Blog = () => {
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
        <h1 className={styles.centertext}>
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
              <Text fontWeight="bold" fontSize="5xl">
                80
              </Text>
              <Text fontSize="2xl">Questions</Text>
            </Stack>
          </Box>
          <Box className={styles.centertext}>
            <Stack spacing={-8}>
              <Text fontWeight="bold" fontSize="5xl">
                42
              </Text>
              <Text fontSize="2xl">Solutions</Text>
            </Stack>
          </Box>
          <Box className={styles.centertext}>
            <Stack spacing={-8}>
              <Text fontWeight="bold" fontSize="5xl">
                30
              </Text>
              <Text fontSize="2xl">New</Text>
            </Stack>
          </Box>
        </Grid>
      </Box>

      <Box className={styles.boxstyle} gridColumn="8/13">
        <Stack pt="30px" spacing={20}>
          <strong className={styles.headtext}>Connect</strong>
        </Stack>
      </Box>

      <Box mb="40px" pb="30px" className={styles.boxstyle} gridColumn="1/8">
        <Stack pt="30px">
          <strong className={styles.headtext}>Recent</strong>
          <Flex pt="25px">
            <Avatar src="https://bit.ly/sage-adebayo" />
            <Box mt="-15px" ml="3">
              <Text fontWeight="bold">
                Reducing pest infestation in cereals and boosting output
                <Badge ml="1" variantColor="green">
                  New
                </Badge>
              </Text>
              <Text fontSize="sm">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the…
              </Text>
            </Box>
          </Flex>
          <Flex pt="25px">
            <Avatar src="https://bit.ly/sage-adebayo" />
            <Box mt="-15px" ml="3">
              <Text fontWeight="bold">
                Reducing pest infestation in cereals and boosting output
                <Badge ml="1" variantColor="green">
                  New
                </Badge>
              </Text>
              <Text fontSize="sm">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the…
              </Text>
            </Box>
          </Flex>
          <Flex pt="25px">
            <Avatar src="https://bit.ly/sage-adebayo" />
            <Box mt="-15px" ml="3">
              <Text fontWeight="bold">
                Reducing pest infestation in cereals and boosting output
                <Badge ml="1" variantColor="green">
                  New
                </Badge>
              </Text>
              <Text fontSize="sm">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the…
              </Text>
            </Box>
          </Flex>
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
