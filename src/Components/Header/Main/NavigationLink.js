import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import dropDawn from "../../../asset/NavCathagories/arrow_down.png";
import classes from "./Navbar.module.css";
import { AuthContext } from "../../../Context/AuthContext";

const NavigationLinks = () => {
  const { isAuthenticated } = useContext(AuthContext); // Get login state

  return (
    <ul className={classes.nav}>
      <li>
        <NavLink
          to="/all-jobs"
          className={({ isActive }) =>
            isActive ? `${classes.navLink} ${classes.active}` : classes.navLink
          }
        >
          All jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive
              ? `${classes.navLink} ${classes.active} ${classes.dropdown}`
              : classes.navLink
          }
        >
          Categories{" "}
          <img
            src={dropDawn}
            alt="drop-down arrow"
            className={classes.dropdownArrow}
          />
        </NavLink>
      </li>
      {!isAuthenticated && (
        <li>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive
                ? `${classes.navLink} ${classes.active}`
                : classes.navLink
            }
          >
            Clients
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavigationLinks;
