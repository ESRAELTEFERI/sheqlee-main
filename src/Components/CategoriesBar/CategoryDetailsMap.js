import DEVOPS from "../../asset/contentTitle/ICONSsvg/devops.svg";
import PRODUCTDESIGN from "../../asset/contentTitle/ICONSsvg/product_design.svg";
import PYTHON from "../../asset/contentTitle/ICONSsvg/python.svg";
import QUALITYASSURANCE from "../../asset/contentTitle/ICONSsvg/quality_assurance.svg";
import UIUXDESIGN from "../../asset/contentTitle/ICONSsvg/ui_ux_design.svg";
import WEB from "../../asset/contentTitle/ICONSsvg/web.svg";

// Tags data
export const Categories = [
  { name: "Web Frontend", jobs: 140, subscribers: 2173 },
  { name: "Backend & Database", jobs: 140, subscribers: 2173 },
  { name: "UI/UX & Product Design", jobs: 78, subscribers: 1045 },
  { name: "Machine Learning", jobs: 140, subscribers: 2173 },
  { name: "Mobile Application", jobs: 140, subscribers: 2173 },
  { name: "QA & DevOps Engineer", jobs: 140, subscribers: 2173 },
  { name: "Security", jobs: 140, subscribers: 2173 },
  { name: "Web Full-Stack", jobs: 140, subscribers: 2173 },
  { name: "JavaScript", jobs: 14, subscribers: 173 },
  { name: "Python", jobs: 10, subscribers: 30 },
  { name: "Golang", jobs: 17, subscribers: 53 },
  { name: "Flutter", jobs: 85, subscribers: 350 },
  { name: "ReactJS", jobs: 101, subscribers: 430 },
  { name: "SvelteJS", jobs: 23, subscribers: 25 },
];

// Define icons for each category
const iconsMap = {
  "Web Frontend": WEB,
  "UI/UX & Product Design": PRODUCTDESIGN,
  "Mobile Application": WEB,
  "QA & DevOps Engineer": DEVOPS,
  "Backend & Database": DEVOPS,
  "Machine Learning": PYTHON,
  "Web Full-Stack": WEB,
  Security: QUALITYASSURANCE,
  JavaScript: WEB,
  Python: PYTHON,
  Golang: DEVOPS,
  Flutter: UIUXDESIGN,
  ReactJS: WEB,
  SvelteJS: WEB,
};

// Default icon
const defaultIcon = PRODUCTDESIGN;

// Add icons to tags
export const getTags = Categories.map((cot) => ({
  ...cot,
  icon: iconsMap[cot.name] || defaultIcon,
}));
