import React from "react";
import classes from "./Footer.module.css";
import FACEBOOK from "../../asset/Footer/facebook.png";
import INSTAGRAM from "../../asset/Footer/instagram.png";
import LINKEIN from "../../asset/Footer/linkedin-logo.png";
import TELEGRAM from "../../asset/Footer/telegram.png";
import TWITTER from "../../asset/Footer/twitter.png";
import YOUTUBE from "../../asset/Footer/youtube.png";
import SETTEINGS from "../../asset/Footer/LogoSettings.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.logoSection}>
          <div className={classes.logo}>
            <img src={SETTEINGS} alt="setting" className={classes.logo} />
          </div>
          <p className={classes.address}> ADDRESS </p>
          <p className={classes.address2}>MIT, Mekelle, Tigray</p>
        </div>
        {/* <p className={classes.address2}>MIT, Mekelle, Tigray</p> */}

        <div className={classes.links}>
          <div className={classes.more}>
            <h4 className={classes.title}>Links</h4>
            <span className={classes.underline}> </span>
          </div>
          <ul>
            <li>
              <NavLink to="/companies" className={classes.navLink}>
                Companies
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className={classes.navLink}>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/tags" className={classes.navLink}>
                Tags
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={classes.company}>
          <div className={classes.more}>
            <h4 className={classes.title}>Company</h4>
            <span className={classes.underline}> </span>
          </div>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className={classes.support}>
          <div className={classes.more}>
            <h4 className={classes.title}>Support</h4>
            <span className={classes.underline}> </span>
          </div>
          <ul>
            <li>Getting started</li>
            <li>
              <NavLink to="/contact" className={classes.navLink}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={classes.navLink}>
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={classes.legal}>
          <div className={classes.more}>
            <h4 className={classes.title}>Legal</h4>
            <span className={classes.underline}> </span>
          </div>
          <ul>
            <li>
              <NavLink to="/privacypolicy" className={classes.navLink}>
                Privacy Policy
              </NavLink>
            </li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* <p className={classes.address2}>MIT, Mekelle, Tigray</p> */}

      <p className={classes.follow}>Follow us on</p>

      <div className={classes.bottomBar}>
        <div className={classes.pp}>
          &copy; 2024 Sheqlee Co., Ltd. All rights reserved.
        </div>
        <div className={classes.socials}>
          <a
            href="www.facebook.com"
            alt="facebook"
            className={classes.socialIcon}
          >
            <img src={FACEBOOK} alt="facebook" className={classes.socialIcon} />
          </a>
          <a href="www.tweeter.com">
            <img src={TWITTER} alt="twitter" className={classes.socialIcon} />
          </a>
          <a href="www.instagram.com">
            <img
              src={INSTAGRAM}
              alt="instagram"
              className={classes.socialIcon}
            />
          </a>
          <a href="www.linkedln.com">
            <img src={LINKEIN} alt="linkedin" className={classes.socialIcon} />
          </a>
          <a href="www.telegram.com">
            <img src={TELEGRAM} alt="telegram" className={classes.socialIcon} />
          </a>
          <a href="www.youtube.com">
            <img src={YOUTUBE} alt="youtube" className={classes.socialIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
