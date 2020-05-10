import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import cx from "classnames";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className={cx(styles.logo)}>
          <h3>FARMAPP</h3>
        </div>
        <ul>
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
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className={styles.navlast}>
          <NavLink to="/loginmodal">
            <button className={styles.navbutton}>Login</button>
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
