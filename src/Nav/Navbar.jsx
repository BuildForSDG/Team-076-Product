
//This component has been deprecated
//Check GridNav



import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../Modals/ModalActions";
import { Stack, Icon, Text } from "@chakra-ui/core";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);

  const authenticated = currentUser.authenticated;

  return (
    <nav className={styles.grid}>
      <div className={cx(styles.logo)}>
        <h3>FARMAPP</h3>
      </div>
      <ul className={styles.navlinks}>
        <li>
          <NavLink
            exact
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/people"
          >
            People
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/questions"
          >
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.navbaractive}
            className={styles.navbarlink}
            to="/createpost"
          >
            <Icon name="edit" size="24px" />
          </NavLink>
        </li>
        {authenticated && (
          <li>
            <NavLink
              activeClassName={styles.navbaractive}
              className={styles.navbarlink}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        )}
      </ul>
      <div className={styles.navlast}>
        {authenticated || (
          <NavLink to="">
            <button
              onClick={() => dispatch(openModal("LoginModal"))}
              className={styles.navbutton}
            >
              Login
            </button>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
