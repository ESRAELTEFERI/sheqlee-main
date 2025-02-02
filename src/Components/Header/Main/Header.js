import React, { useState, useContext } from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLink";
import AuthButtons from "./AuthButtons";
import { AuthContext } from "../../../Context/AuthContext";

const Header = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <Logo onToggleMenu={toggleMenu} />
      <div
        className={`${styles.navLinksAndAuth} ${
          showMenu ? styles.mobileActive : ""
        }`}
      >
        <NavigationLinks showMenu={showMenu} />
        <AuthButtons
          isLoggedIn={isAuthenticated}
          userType={user?.userType}
          onLogout={logout}
        />
      </div>
    </nav>
  );
};

export default Header;
