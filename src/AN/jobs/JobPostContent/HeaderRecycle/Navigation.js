import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import dropDawn from "../../asset/NavCathagories/arrow_down.png";

const Navigation = () => (
  <>
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
          Categories
          <img
            src={dropDawn}
            alt="drop-down arrow"
            className={classes.dropdownArrow}
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive ? `${classes.navLink} ${classes.active}` : classes.navLink
          }
        >
          Clients
        </NavLink>
      </li>
    </ul>
  </>
);

export default Navigation;
// import React from "react";
// import styles from "./NNN.module.css";

// const NavigationLinks = () => {
//   return (
//     <ul className={styles.navLinks}>
//       <li>
//         <a href="#all-jobs">All jobs</a>
//       </li>
//       <li>
//         <a href="#categories">Categories</a>
//       </li>
//       <li>
//         <a href="#clients">Clients</a>
//       </li>
//     </ul>
//   );
// };

// export default NavigationLinks;
