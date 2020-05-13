import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import cx from "classnames";
import { connect } from "react-redux";
import {openModal} from '../Modals/ModalActions'


const matchDispatchToProps = {
  openModal
};

class Navbar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };
  render() {
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
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className={styles.navlast}>
          <NavLink to="">
            <button onClick={this.handleSignIn} className={styles.navbutton}>Login</button>
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default connect(null,matchDispatchToProps)(Navbar);
