import { useState } from "react";
import styles from "./Upload.module.css";

function UploadComponent() {
  const [image, setImage] = useState(null);

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
          onChange={handleImageUpload}
          hidden
        />
      </label>
      <button className={styles.uploadButton} onClick={handleImageUpload}>
        Upload
      </button>
      <p className={styles.text}>2MB Max | 1:1 Ratio</p>
    </div>
  );
}
export default UploadComponent;
