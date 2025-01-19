// src/App.js
import React from "react";
import StatsCard from "./StatsCard";

function StatsList() {
  return (
    <div
      className="App"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <StatsCard
        title="Unique alerts delivered"
        description="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched. (Launched: 1 YEAR AGO)"
        stat="1.5M+"
        Mode={false}
      />
      <StatsCard
        title="Telegram Channel Subscribers"
        description="We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per day on average"
        stat="49.7K+"
        Mode={true}
      />
      <StatsCard
        title="Unique alerts delivered"
        description="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched. (Launched: 1 YEAR AGO)"
        stat="1.5M+"
        Mode={false}
      />
      <StatsCard
        title="Telegram Channel Subscribers"
        description="We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per day on average"
        stat="49.7K+"
        Mode={true}
      />
    </div>
  );
}

export default StatsList;
