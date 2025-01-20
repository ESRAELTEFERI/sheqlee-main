import classes from "./Header.module.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";

const Header = () => (
  <nav className={classes.header}>
    <Logo />
    <div className={classes.navLinksAndAuth}>
      <Navigation />
      <AuthButtons />
    </div>
  </nav>
);

export default Header;
