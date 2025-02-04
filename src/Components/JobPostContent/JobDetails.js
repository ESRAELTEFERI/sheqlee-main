import { useParams } from "react-router-dom";
import { Contents } from "./ContentData"; // Your job data source
import classes from "./JobDetails.module.css";

const JobDetails = () => {
  const { id } = useParams();
  const job = Contents.find((item) => item.id === parseInt(id));

  if (!job) return <h2>Job not found</h2>;

  return (
    <div className={classes.container}>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <div className={classes.details}>
        <span>{job.timePosted}</span>
        <span>{job.company}</span>
        <span>{job.jobType}</span>
        <span>{job.level}</span>
        <span>{job.pay}</span>
      </div>
      <a href={job.applyLink} className={classes.applyButton}>Apply Now</a>
    </div>
  );
};

export default JobDetails;
