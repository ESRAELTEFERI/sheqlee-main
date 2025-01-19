import React from "react";
import JobCard from "./JobCard";
import classes from "./JobsData.module.css";

function JobsData() {
  const jobData = [
    {
      role: "Product Designer",
      description:
        "KeplerLab is a VC-backed, stealth, application-only platform for senior product designers to team up with the best companies on their next big thing.",
      timePosted: "30mins ago",
      company: "KeplerLab",
      jobType: "Full-Time",
      level: "Intermediate",
      pay: "$15/hr",
      applyLink: "#",
    },
    {
      role: "UI/UX Designer",
      description:
        "We’re looking for an experienced and talented UI designer to design and shape unique, user-centric design systems and experiences.",
      timePosted: "45mins ago",
      company: "KeplerLab",
      jobType: "Part-Time",
      level: "Expert",
      pay: "$25-$30/hr",
      applyLink: "#",
    },
    {
      role: "Senior Python Developer",
      description:
        "The ideal candidate will be responsible for helping us develop a wide variety of projects leveraging PostgreSQL, Django, and Python.",
      timePosted: "1hr ago",
      company: "Infosys",
      jobType: "Full-Time",
      level: "Intermediate",
      pay: "$20/hr",
      applyLink: "#",
    },
    {
      role: "Front-End Developer",
      description:
        "Join our dynamic team to work on exciting front-end projects utilizing React and modern web technologies.",
      timePosted: "2hrs ago",
      company: "TechCorp",
      jobType: "Remote",
      level: "Senior",
      pay: "$35/hr",
      applyLink: "#",
    },
    {
      role: "Backend Engineer",
      description:
        "We are seeking a skilled backend engineer to develop APIs and microservices using Node.js and Express.",
      timePosted: "3hrs ago",
      company: "DevSolutions",
      jobType: "Contract",
      level: "Expert",
      pay: "$40/hr",
      applyLink: "#",
    },
  ];

  return (
    <div className={classes["App"]}>
      <div className={classes["job-list"]}>
        {jobData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}

export default JobsData;
