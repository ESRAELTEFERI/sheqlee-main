// import React, { useState, useContext } from "react";
// import styles from "./MainLogIn.module.css";
// import LogInInfo from "./LogInInfo";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";

// function MainLogIn({ onLogin }) {
//   const [infoData, setInfoData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext); // Use AuthContext

//   const handleLogin = () => {
//     if (login(infoData.email, infoData.password)) {
//       onLogin(true);
//       navigate("/dashboard"); // Redirect to the dashboard on successful login
//     } else {
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setInfoData((prev) => ({ ...prev, [id]: value }));
//   };

//   return (
//     <>
//       <LogInInfo infoData={infoData} onInfoDataChange={handleChange} />
//       {error && <p className={styles.error}>{error}</p>}
//       <div className={styles.footer}>
//         <span className={styles.footerText}>
//           <div className={styles.moreJobs}>
//             Forgot password?
//             <NavLink to="/reset" className={styles.linkL}>
//               Reset <div className={styles.underlineL}> </div>
//             </NavLink>
//             <button className={styles.registerButton} onClick={handleLogin}>
//               Login
//             </button>
//           </div>
//         </span>
//       </div>
//     </>
//   );
// }

// export default MainLogIn;

import React, { useState, useContext } from "react";
import styles from "./MainLogIn.module.css";
import LogInInfo from "./LogInInfo";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function MainLogIn() {
  const [infoData, setInfoData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (login(infoData.email, infoData.password)) {
      navigate("/dashboard"); // Redirect on successful login
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInfoData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <LogInInfo infoData={infoData} onInfoDataChange={handleChange} />
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.footer}>
        <span className={styles.footerText}>
          <div className={styles.moreJobs}>
            Forgot password?
            <NavLink to="/reset" className={styles.linkL}>
              Reset <div className={styles.underlineL}> </div>
            </NavLink>
            <button className={styles.registerButton} onClick={handleLogin}>
              Login
            </button>
          </div>
        </span>
      </div>
    </>
  );
}

export default MainLogIn;
