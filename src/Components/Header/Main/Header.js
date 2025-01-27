import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLink";
import AuthButtons from "./AuthButtons";
import { AuthContext } from "../../../Context/AuthContext";

const Header = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.navLinksAndAuth}>
        <NavigationLinks />
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
