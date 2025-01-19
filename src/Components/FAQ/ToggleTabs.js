import React, { useState } from "react";
import styles from "./ToggleTabs.module.css";
import tabs from "./TabsData"; // Import the content

const ToggleTabs = () => {
  const [activeTab, setActiveTab] = useState("Freelancers");
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null); // Track the currently opened question

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setVisibleAnswerIndex(null); // Reset the opened question when switching tabs
  };

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.container}>
      {/* Tab Selector */}
      <div className={styles.tabSelector}>
        <div className={styles.tab}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Freelancers" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("Freelancers")}
          >
            Freelancers
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Companies" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("Companies")}
          >
            Companies
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className={styles.content}>
        {tabs[activeTab].map((item, index) => (
          <div key={index} className={styles.qaItem}>
            <div
              className={styles.question}
              onClick={() => toggleAnswerVisibility(index)}
            >
              {item.question}
              <span className={styles.icon}>
                {visibleAnswerIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {visibleAnswerIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleTabs;
