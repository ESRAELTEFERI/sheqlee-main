import LogInButton from "../Header/LogInButton";
import classes from "./ClientHeader.module.css";

const ClientHeader = () => {
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.heading}>Sheqlee for Clients</h1>
        <p className={classes.subheading}>
          Access a pool of talented, competent and dedicated experts and
          professional from Ethiopia.
        </p>
        <div className={classes.login}>
          <LogInButton className={classes.loginn} />
          <button className={classes.buttonFix}>Register as an employer</button>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
