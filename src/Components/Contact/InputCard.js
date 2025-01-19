import React, { useState } from "react";
import styles from "./InputCard.module.css";
import EMAIL from "../../asset/Contact/email.svg";
import SUBJECT from "../../asset/Contact/idea.svg";

const InputCard = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const maxLength = 512;

  // handling email input change and validation
  const handleEmailChange = (event) => {
    console.log("email handled");
    const value = event.target.value;
    setEmail(value);

    //  email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  // Handle subject input change
  const handleSubjectChange = (event) => {
    console.log("subject handler");
    setSubject(event.target.value);
  };

  // Handle message input change
  const handleMessageChange = (event) => {
    ("message!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    if (event.target.value.length <= maxLength) {
      setMessage(event.target.value);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate that all inputs are filled and valid
    if (!email || !isEmailValid || !subject || !message) {
      alert("Please fill in all fields with valid data.");
      return;
    }

    //  data object to store or send
    const storeData = {
      subject,
      email,
      message,
    };

    //  Storing in local storage
    localStorage.setItem("storeData", JSON.stringify(storeData));
    alert("Message stored successfully!");

    // Reset fields after submission
    setSubject("");
    setEmail("");
    setMessage("");
  };

  /**********************************************************************************/
  //  sending data to an API (optional)
  // const sendToServer = async (formData) => {
  //   try {
  //     const response = await fetch("https://an-api-endpoint.com/messages", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //     } else {
  //       alert("Failed to send message. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };
  /**********************************************************************************/

  return (
    <div className={styles.card}>
      <div className={styles.align}>
        <div className={styles.back}>
          {/* Subject Input */}
          <label htmlFor="message" className={styles.label}>
            Subject
          </label>
          <div className={styles.inputGroup}>
            <img src={SUBJECT} alt="idea icon" className={styles.iconSubject} />
            <input
              type="text"
              className={styles.input}
              placeholder="Regarding Posting a Job"
              value={subject}
              onChange={handleSubjectChange}
            />
          </div>
        </div>

        <div className={styles.back}>
          {/* Email Input */}
          <label htmlFor="message" className={styles.label}>
            Your email
          </label>
          <div className={styles.inputGroup}>
            <img src={EMAIL} alt="idea icon" className={styles.iconEmail} />
            <input
              type="email"
              className={`${styles.input} ${!isEmailValid ? styles.error : ""}`}
              placeholder="abebe@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
      </div>
      {!isEmailValid && (
        <p className={styles.errorText}>Please enter a valid email.</p>
      )}

      {/* Message Input */}
      <label htmlFor="message" className={styles.label}>
        Message
      </label>
      <div className={styles.messageGroup}>
        <textarea
          id="message"
          className={styles.textarea}
          placeholder="Write your message down..."
          value={message}
          onChange={handleMessageChange}
        />
        <div className={styles.counter}>
          {message.length}/{maxLength}
        </div>
      </div>

      {/* Send Button */}
      <button
        className={styles.button}
        onClick={handleSubmit}
        disabled={
          message.length === 0 || message.length > maxLength || !isEmailValid
        }
      >
        Send message
      </button>
    </div>
  );
};

export default InputCard;
