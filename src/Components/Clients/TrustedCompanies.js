import classes from "./TrustedCompanies.module.css";
import META from "../../asset/Trusted/meta.png";
import GOOGLE from "../../asset/Trusted/google.png";
import MICROSOFT from "../../asset/Trusted/microsoft.png";
import APPLE from "../../asset/Trusted/apple.png";
function TrustedCompanies() {
  return (
    <div className={classes.Back}>
      <h2 className={classes.registorText}>Trusted by</h2>
      <div className={classes.icon}>
        <img src={GOOGLE} alt="google" className={classes.prG} />
        <img src={META} alt="meta" className={classes.prMeta} />
        <img src={MICROSOFT} alt="microSoft" className={classes.prMicro} />
        <img src={APPLE} alt="apple" className={classes.prA} />
      </div>
    </div>
  );
}

export default TrustedCompanies;
