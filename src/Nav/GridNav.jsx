import React from "react";
import { Grid, Box, List, Icon, Button } from "@chakra-ui/core";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../Modals/ModalActions";

const GridNav = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);
  const authenticated = currentUser.authenticated;

  return (
    <Grid
      className={styles.nav}
      autoRows="auto"
      templateColumns="repeat(12, 1fr)"
      gap={4}
    >
      <Box gridColumn="1/4">
        <div className={cx(styles.logo)}>
          <h3>FARMAPP</h3>
        </div>
      </Box>
      <Box gridColumn="4/9">
        <List display={{sm: "none", md: "grid", lg: "grid", xl: "grid"}} className={styles.innerGrid}>
          <NavLink
            exact
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/"
          >
            Features
          </NavLink>
          <NavLink
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/people"
          >
            People
          </NavLink>
          <NavLink
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/questions"
          >
            Questions
          </NavLink>
          <NavLink
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/createpost"
          >
            <Icon name="edit" size="24px" />
          </NavLink>
          <NavLink
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/blog"
          >
            Blog
          </NavLink>
        </List>
      </Box>
      <Box justifySelf="end" pr="20px"  gridColumn="10/13">
        {authenticated || (
          <Button
            onClick={() => dispatch(openModal("LoginModal"))}
            className={styles.navbutton}
            variantColor="green"
            bg="fgreen.900"
          >
            Login
          </Button>
        )}
      </Box>
    </Grid>
  );
};

export default GridNav;
