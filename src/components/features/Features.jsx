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
      <Box gridColumn={{sm: "2/12", lg: "2/7" }} className={cx(styles.herotext)}>
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
          bg="fgreen.900"
          size="lg"
          className={styles.navbutton}
        >
          Sign up
        </Button>
      </Box>
      <Box display={{sm: "none", md: "block", lg: "block", xl: "block"}} gridColumn={{sm: "2/12", lg: "7/12" }} gridRow={{sm: "2",  lg: "1"}} className={cx(styles.sidepic)}>
        <img src={sidepicture} />
      </Box>
      <Box gridColumn="6/8" gridRow="3"></Box>
    </Grid>
  );
};

export default Features;
