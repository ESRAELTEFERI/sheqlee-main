// import React, { useState } from "react";
// import styles from "./MainReset.module.css";
// import EMAIL from "../../asset/SignUp/emaill.svg";
// import { useNavigate } from "react-router-dom";
// import PADLOCk from "../../asset/padlock.svg";

// function MainReset() {
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const handleSendCode = async () => {
//     if (!email) {
//       alert("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://192.168.5.217:3000/api/v1/users/forgotPassword",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email }),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("resetEmail", email);
//         alert("Reset code sent to your email.");
//         navigate("/newpassword");
//       } else {
//         alert(data.message || "Failed to send reset code.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className={styles.card}>
//       <h2 className={styles.title}>
//         <img src={PADLOCk} alt="padlock icon" className={styles.icon} />
//         Reset password
//       </h2>
//       <form className={styles.form}>
//         <div className={styles.row}>
//           <div className={styles.field}>
//             <label className={styles.label} htmlFor="email">
//               Email
//             </label>
//             <div className={styles.inputWrapper}>
//               <img src={EMAIL} alt="email icon" className={styles.iconEmail} />
//               <input
//                 type="email"
//                 id="email"
//                 className={styles.input}
//                 placeholder="example@gmail.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <p className={styles.paragraph}>
//               You will receive a password reset code in your email.
//             </p>
//           </div>
//         </div>
//       </form>
//       <div className={styles.footer}>
//         <button className={styles.registerButton} onClick={handleSendCode}>
//           Send code
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MainReset;
import React, { useState } from "react";
import styles from "./MainReset.module.css";
import EMAIL from "../../asset/SignUp/emaill.svg";
import { useNavigate } from "react-router-dom";
import PADLOCk from "../../asset/padlock.svg";

function MainReset() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://192.168.5.217:3000/api/v1/users/forgotPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      console.log("Response Data:", data); // Debugging

      if (response.ok) {
        localStorage.setItem("resetEmail", email);
        alert("Reset code sent to your email.");
        navigate("/resetPassword");
      } else {
        alert(data.message || "Failed to send reset code.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <img src={PADLOCk} alt="padlock icon" className={styles.icon} />
        Reset password
      </h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <div className={styles.inputWrapper}>
              <img src={EMAIL} alt="email icon" className={styles.iconEmail} />
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <p className={styles.paragraph}>
              You will receive a password reset code in your email.
            </p>
          </div>
        </div>
      </form>
      <div className={styles.footer}>
        <button
          className={styles.registerButton}
          onClick={handleSendCode}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send code"}
        </button>
      </div>
    </div>
  );
}

export default MainReset;
