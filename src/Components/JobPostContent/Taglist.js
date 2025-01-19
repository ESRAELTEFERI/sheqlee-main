import React from "react";
import "./Bot.module.css";

const taglist = () => {
  return (
    <div className="tag-container">
      <span className="tag">
        <i className="icon-calendar"></i> 30mins ago
      </span>
      <span className="tag">
        <i className="icon-company"></i> KeperLab
      </span>
      <span className="tag">
        <i className="icon-clock"></i> Full-Time
      </span>
      <span className="tag">
        <i className="icon-level"></i> Intermediate
      </span>
      <span className="tag">
        <i className="icon-rate"></i> $15/hr
      </span>
      <button className="apply-button">Apply</button>
    </div>
  );
};

export default taglist;
