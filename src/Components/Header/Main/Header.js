import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLink";
import AuthButtons from "./AuthButtons";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <Logo />

      {/* Navigation Links and Authentication Buttons */}
      <div className={styles.navLinksAndAuth}>
        <NavigationLinks />
        <AuthButtons />
      </div>
    </nav>
  );
};

export default Header;
