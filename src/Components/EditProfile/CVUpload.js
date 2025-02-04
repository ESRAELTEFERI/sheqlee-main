// import React, { useState } from "react";
// import styles from "./CVUpload.module.css";
// import ELLIPSE from "../../asset/Ellipse.svg";

// const CVUpload = () => {
//   const [cvFile, setCvFile] = useState(null); // Store uploaded file

//   // Handle file selection
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     if (file && file.type === "application/pdf") {
//       setCvFile(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//       setCvFile(null);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <label className={styles.label}>
//         Your CV (<span className={styles.required}>*</span>.pdf)
//       </label>
//       <p className={styles.description}>
//         Adding your CV will help us know you in detail and suggest you to
//         companies.
//       </p>

//       <div className={styles.uploadContainer}>
//         <input
//           type="file"
//           accept=".pdf"
//           onChange={handleFileChange}
//           id="cvUpload"
//           className={styles.hiddenInput}
//         />

//         {/* Display "..." initially, then show file name */}
//         <div className={styles.fileName}>
//           {cvFile ? (
//             cvFile.name
//           ) : (
//             <div className={styles.ellipsecon}>
//               <img src={ELLIPSE} alt="ellipse" />
//               <img src={ELLIPSE} alt="ellipse" />
//               <img src={ELLIPSE} alt="ellipse" />
//             </div>
//           )}
//         </div>

//         <label htmlFor="cvUpload" className={styles.uploadButton}>
//           Upload CV <span className={styles.uploadButtonPDF}>[.pdf]</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default CVUpload;

import React, { useState } from "react";
import styles from "./CVUpload.module.css";
import ELLIPSE from "../../asset/Ellipse.svg";

const CVUpload = ({ setCv }) => {
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/pdf") {
      setCvFile(file);

      // Convert file to Base64 and store in localStorage
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setCv(file); // Pass to Profile component
        localStorage.setItem("profileCV", JSON.stringify(file.name));
      };
    } else {
      alert("Please upload a valid PDF file.");
      setCvFile(null);
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Your CV (<span className={styles.required}>*</span>.pdf)
      </label>
      <p className={styles.description}>
        Adding your CV will help us know you in detail and suggest you to
        companies.
      </p>

      <div className={styles.uploadContainer}>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          id="cvUpload"
          className={styles.hiddenInput}
        />

        <div className={styles.fileName}>
          {cvFile ? (
            cvFile.name
          ) : (
            <div className={styles.ellipsecon}>
              <img src={ELLIPSE} alt="ellipse" />
              <img src={ELLIPSE} alt="ellipse" />
              <img src={ELLIPSE} alt="ellipse" />
            </div>
          )}
        </div>

        <label htmlFor="cvUpload" className={styles.uploadButton}>
          Upload CV <span className={styles.uploadButtonPDF}>[.pdf]</span>
        </label>
      </div>
    </div>
  );
};

export default CVUpload;
