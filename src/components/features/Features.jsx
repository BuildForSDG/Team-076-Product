import React from "react";
import styles from "./Features.module.css";
import sidepicture from "../../assets/landpageimg.svg";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { Grid, Box, Button } from "@chakra-ui/core";
import { openModal } from "../../Modals/ModalActions";

 

const Features = () => {
  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(openModal("RegisterModal"));
  };
 
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={-1}
      className={cx(styles.container)}
    >
      <Box gridColumn="2/7" className={cx(styles.herotext)}>
        <h1>
          We are empowering
          <br />
          farming communities
          <br />
          to help each other.
        </h1>
        <Button
          onClick={handleSignUp}
          variantColor="green"
          bg="green.900"
          size="lg"
          className={styles.navbutton}
        >
          Sign up
        </Button>
      </Box>
      <Box gridColumn="7/12" className={cx(styles.sidepic)}>
        <img src={sidepicture} />
      </Box>
      <Box gridColumn="6/8" gridRow="3"></Box>
    </Grid>
  );
};

export default Features;
