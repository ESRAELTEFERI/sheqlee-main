import { Link } from "react-router-dom";
import classes from "./MainCompany.module.css";
import { companies } from "./CompaniesData";
import COMPANY from "../../asset/Companies/companyy.svg";
import VERIFY from "../../asset/Companies/verifyy.svg";

const MainCompany = () => {
  return (
    <>
      <div className={classes.container}>
        <img
          src={COMPANY}
          alt="companies header"
          className={classes.iconcompany}
        />
        <h1 className={classes.heading}>Companies on Sheqlee</h1>
        <p className={classes.subheading}>
          List of the companies on Sheqlee with their number of job posts and
          subscribers.
        </p>
        <div className={classes.grid}>
          {companies.map((com, index) => (
            <Link
              to={`/companies/${com.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/\//g, "-")}`}
              className={classes.card}
              key={index}
            >
              <div className={classes.contentContainer}>
                <div className={classes.align}>
                  <h3 className={classes.title}>{com.name}</h3>
                  {com.isVerified && (
                    <img
                      src={VERIFY}
                      alt="verified"
                      className={classes["verification"]}
                    />
                  )}
                </div>
                <p className={classes.details}>
                  {com.jobs} jobs &bull; {com.subscribers} subscribers
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainCompany;
