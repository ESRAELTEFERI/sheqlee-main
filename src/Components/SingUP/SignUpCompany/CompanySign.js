import React from "react";
import styles from "./CompanySign.module.css";
import COMANY from "../../../asset/SignUp/companyyy.svg";
import COMAN from "../../../asset/SignUp/compan.svg";

// const CompanySign = ({ onCompanyDataChange }) => {
//   const [companyName, setCompanyName] = useState("");
//   const [domain, setDomain] = useState("");

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     if (id === "companyName") setCompanyName(value);
//     if (id === "domain") setDomain(value);

//     //Notify parent of changes
//     onCompanyDataChange({ companyName, domain, [id]: value });
//   };
const CompanySign = ({ companyData, onCompanyDataChange }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    onCompanyDataChange((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <img src={COMANY} alt="idea icon" className={styles.icon} />
        Company Registration
      </h2>

      <form className={styles.align}>
        <div className={styles.back}>
          <label className={styles.label} htmlFor="companyName">
            Company name <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputGroup}>
            <img src={COMAN} alt="idea icon" className={styles.iconCompany} />
            <input
              type="text"
              id="companyName"
              className={styles.input}
              placeholder="Sheqlee Co. Ltd."
              value={companyData.companyName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className={styles.back}>
          <label className={styles.label} htmlFor="domain">
            Domain <span className={styles.required}>*</span>
          </label>
          <div className={styles.messageGroup}>
            <span className={styles.iconHttp}>
              https:// {/* This represents the domain prefix */}
            </span>
            <input
              type="text"
              id="domain"
              className={styles.input}
              placeholder="sheqlee.com"
              value={companyData.domain}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanySign;
