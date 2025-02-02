import { useState, useRef } from "react";
import styles from "./Upload.module.css";

function UploadComponent() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for file input

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.uploadBox}>
        {image ? (
          <img src={image} alt="Uploaded" className={styles.preview} />
        ) : (
          <div className={styles.placeholder}></div>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          hidden
        />
      </label>
      {/* Modify button to trigger file input */}
      <button
        className={styles.uploadButton}
        onClick={() => fileInputRef.current.click()}
      >
        Upload
      </button>
      <p className={styles.text}>2MB Max | 1:1 Ratio</p>
    </div>
  );
}

export default UploadComponent;
