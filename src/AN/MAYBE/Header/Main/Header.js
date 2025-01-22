import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLink";
import AuthButtons from "./AuthButtons";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login/logout toggle
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <Logo />

      {/* Navigation Links and Authentication Buttons */}
      <div className={styles.navLinksAndAuth}>
        <NavigationLinks />
        <AuthButtons
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      </div>
    </nav>
  );
};

export default Header;
