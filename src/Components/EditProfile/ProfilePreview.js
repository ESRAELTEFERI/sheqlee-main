// import React from "react";
// import styles from "./ProfilePreview.module.css";

// const ProfilePreview = () => {
//   const profileData = JSON.parse(localStorage.getItem("profileData")) || {};

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Freelancer Profile</h1>
//       <div className={styles.profileHeader}>
//         <div className={styles.profileInfo}>
//           <div className={styles.fieldGroup}>
//             <label>Full name</label>
//             <div className={styles.field}>{profileData.fullName}</div>
//           </div>
//           <div className={styles.fieldGroup}>
//             <label>Title</label>
//             <div className={styles.field}>{profileData.title}</div>
//           </div>
//         </div>
//         <img
//           src={profileData.image}
//           alt="Profile"
//           className={styles.profileImage}
//         />
//       </div>

//       <div className={styles.bioSection}>
//         <label>Bio</label>
//         <div className={styles.bio}>{profileData.bio}</div>
//       </div>

//       <div className={styles.skillSection}>
//         <label>Skillset</label>
//         <table className={styles.skillTable}>
//           <thead>
//             <tr>
//               <th>Skill</th>
//               <th>Level</th>
//             </tr>
//           </thead>
//           <tbody>
//             {profileData.skills.map((skill, index) => (
//               <tr key={index}>
//                 <td>{skill.name}</td>
//                 <td>{"⚫".repeat(skill.level)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className={styles.profileLinks}>
//         <label>Profiles</label>
//         <table className={styles.linkTable}>
//           <thead>
//             <tr>
//               <th>Profile name</th>
//               <th>URL</th>
//             </tr>
//           </thead>
//           <tbody>
//             {profileData.links.map((link, index) => (
//               <tr key={index}>
//                 <td>{link.name}</td>
//                 <td>
//                   <a href={link.url} target="_blank" rel="noopener noreferrer">
//                     {link.url}
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className={styles.cvSection}>
//         <label>CV</label>
//         {profileData.cv && (
//           <div className={styles.cvDownload}>
//             <span>{profileData.cv.name}</span>
//             <a
//               href={URL.createObjectURL(profileData.cv)}
//               download
//               className={styles.downloadButton}
//             >
//               Download
//             </a>
//           </div>
//         )}
//       </div>

//       <div className={styles.emailSection}>
//         <label>Email</label>
//         <div className={styles.email}>
//           {profileData.email || "muruts.yifter@gmail.com"}
//         </div>
//       </div>

//       <button className={styles.printButton} onClick={() => window.print()}>
//         Print Profile
//       </button>
//     </div>
//   );
// };

// export default ProfilePreview;
import styles from "./Profile.module.css";
import EDIT from "../../asset/After/edit_profile.svg";
import DOMPurify from "dompurify"; // Optional: to sanitize the HTML for security
import draftToHtml from "draftjs-to-html"; // Import the library for conversion
import { convertToRaw, convertFromRaw } from "draft-js";

import React from "react";

const ProfilePreview = () => {
  const profileData = JSON.parse(localStorage.getItem("profileData")) || {};

  const renderHtml = (rawContent) => {
    try {
      const contentState = convertFromRaw(JSON.parse(rawContent));
      const htmlContent = draftToHtml(convertToRaw(contentState));
      return DOMPurify.sanitize(htmlContent); // Optionally sanitize the HTML for security
    } catch (e) {
      return ""; // Return empty string if error occurs during conversion
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img src={EDIT} alt="dashboard header" className={styles.iconCat} />
        <h1 className={styles.heading}>Freelancer Profile</h1>
      </div>

      <div className={styles.card}>
        <form className={styles.align}>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="companyName">
              Full name
            </label>
            <div className={styles.inputGroup}>{profileData.fullName}</div>
          </div>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="domain">
              Title
            </label>
            <div className={styles.messageGroup}>{profileData.title}</div>
          </div>
          <img
            src={profileData.image}
            alt="Profile"
            className={styles.profileImage}
          />
        </form>

        <div className={styles.bioSection}>
          <label className={styles.label}>Bio</label>
          {/* <div
            className={styles.message}
            dangerouslySetInnerHTML={{ __html: profileData.bio || "" }}
          />
        </div> */}
          <div
            className={styles.message}
            dangerouslySetInnerHTML={{
              __html: renderHtml(profileData.bio),
            }}
          />
        </div>

        <div className={styles.skillSection}>
          <label>Skillset</label>
          <table className={styles.skillTable}>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {profileData.skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill.name}</td>
                  <td>{"⚫".repeat(skill.level)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.profileLinks}>
          <label>Profiles</label>
          <table className={styles.linkTable}>
            <thead>
              <tr>
                <th>Profile name</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {profileData.links.map((link, index) => (
                <tr key={index}>
                  <td>{link.name}</td>
                  <td>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*******************
         *
         *
         *
         *
         * **************************/}
        {/* <div className={styles.cvSection}>
          <label>CV</label>
          {profileData.cv && profileData.cv.data && (
            <div className={styles.cvDownload}>
              <span>{profileData.cv.name}</span>
              <a
                href={URL.createObjectURL(
                  new Blob([new Uint8Array(profileData.cv.data)], {
                    type: profileData.cv.type,
                  })
                )}
                download={profileData.cv.name}
                className={styles.downloadButton}
              >
                Download
              </a>
            </div>
          )}
        </div>

        <div className={styles.emailSection}>
          <label>Email</label>
          <div className={styles.email}>
            {profileData.email || "muruts.yifter@gmail.com"}
          </div>
        </div> */}

        <form className={styles.align}>
          <div className={styles.back}>
            <label className={styles.label} htmlFor="companyName">
              CV
            </label>
            <div className={styles.inputGroup}>
              <div className={styles.cvDownload}>
                <span>{profileData.cv.name}</span>
                <a
                  href={URL.createObjectURL(
                    new Blob([new Uint8Array(profileData.cv.data)], {
                      type: profileData.cv.type,
                    })
                  )}
                  download={profileData.cv.name}
                  className={styles.downloadButton}
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          <div className={styles.back}>
            <label className={styles.label} htmlFor="domain">
              Email
            </label>
            <div className={styles.messageGroup}>
              {profileData.email || "muruts.yifter@gmail.com"}
            </div>
          </div>
        </form>

        <div className={styles.purpleButtoncon}>
          <button
            className={styles.purpleButton}
            onClick={() => window.print()}
          >
            Print Profile
          </button>
        </div>
      </div>
    </>
  );
};
export default ProfilePreview;
