import CALENDER from "../../asset/TagsIcon/calendar.png";
import COMPANY from "../../asset/TagsIcon/company.png";
import FEATHERCLOCK from "../../asset/TagsIcon/feather-clock.png";

//AllJobs
import DEVOPS from "../../asset/contentTitle/devops.png";
import PRODUCTDESIGN from "../../asset/contentTitle/product_design.png";
import PYTHON from "../../asset/contentTitle/python.png";
import QUALITYASSURANCE from "../../asset/contentTitle/quality_assurance.png";
import UIUXDESIGN from "../../asset/contentTitle/ui_ux_design.png";
import WEB from "../../asset/contentTitle/web.png";

const defaultIcon = COMPANY; // Imports a placeholder

const iconMap = {
  timePosted: CALENDER, // Matches the prop name 'timePosted'
  company: COMPANY, // Matches the prop name 'company'
  jobType: FEATHERCLOCK, // Matches the prop name 'jobType'
  level: CALENDER, // Matches the prop name 'level'
  pay: COMPANY, // Matches the prop name 'pay'
};

const iconMapTitle = {
  "Junior DevOps Engineer": DEVOPS,
  "Product Designer": PRODUCTDESIGN,
  "Senior Python Developer": PYTHON,
  "Quality Specialist": QUALITYASSURANCE,
  "UI/UX Designer": UIUXDESIGN,
  "Web Developer": WEB,
};

export const getIconForKey = (key) => iconMap[key] || defaultIcon; // default icon if no match
export const getIconForTitle = (key) => iconMapTitle[key] || defaultIcon;
