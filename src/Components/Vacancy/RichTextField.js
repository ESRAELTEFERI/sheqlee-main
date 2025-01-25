import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styles from "./RichTextField.module.css";

const RichTextField = ({ label, placeholder, required }) => {
  const editorRef = useRef(null);

  //   useEffect(() => {
  //     const toolbarOptions = [
  //       // [{ header: [1, 2, 3, false] }],
  //       ["bold", "italic", "strike"], // Formatting buttons
  //       [{ list: "ordered" }, { list: "bullet" }], // List options
  //       [{ align: [] }], // Alignment options
  //       [{ script: "super" }, { script: "sub" }], // Subscript/Superscript
  //       // ["link", "image"], // Link and image
  //       // ["clean"], // Clear formatting
  //     ];

  //     // Initialize Quill
  //     new Quill(editorRef.current, {
  //       theme: "snow",
  //       placeholder,
  //       modules: {
  //         toolbar: toolbarOptions,
  //       },
  //     });
  //   }, [placeholder]);

  //   return (
  //     <div className={styles.container}>
  //       {/* Label */}
  //       <label className={styles.label}>
  //         {label} {required && <span className={styles.required}>*</span>}
  //       </label>

  //       {/* Quill Editor */}
  //       <div className={styles.editt}>
  //         <div ref={editorRef} className={styles.editor}></div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default RichTextField;
  useEffect(() => {
    const toolbarOptions = [
      ["bold", "italic", "strike"], // Formatting buttons
      [{ list: "ordered" }, { list: "bullet" }], // List options
      [{ align: [] }], // Alignment options
      [{ script: "super" }, { script: "sub" }], // Subscript/Superscript
    ];

    new Quill(editorRef.current, {
      theme: "snow",
      placeholder,
      modules: {
        toolbar: {
          container: toolbarOptions, // Default toolbar options
          // Add a class to the toolbar container
          className: styles.customToolbar,
        },
      },
    });
  }, [placeholder]);

  return (
    <div className={styles.container}>
      {/* Label */}
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>

      {/* Quill Editor */}
      <div className={styles.editt}>
        <div ref={editorRef} className={styles.editor}></div>
      </div>
    </div>
  );
};
export default RichTextField;
