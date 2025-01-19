import React, { useState, useEffect } from "react";
import styles from "./PlatformStat.module.css";
import { stats } from "./PlatformData";

const PlatformStats = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.platformStats}>
      <h2 className={styles.title}>Platform stats</h2>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            {loading ? (
              <>
                <div className={styles.icon}>{stat.icon}</div>
                <div className={styles.skeletonValue}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonTextSecond}></div>
              </>
            ) : (
              <>
                <div className={styles.icon}>{stat.icon}</div>
                <div className={styles.value}>{stat.value}</div>
                <div className={styles.description}>{stat.description}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformStats;
