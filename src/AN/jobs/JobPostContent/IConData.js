import { ReactComponent as DEVOPS } from "../../asset/Tags/devops.svg";
import { ReactComponent as PRODUCTDESIGN } from "../../asset/Tags/product_design.svg";
import { ReactComponent as PYTHON } from "../../asset/Tags/python.svg";
import { ReactComponent as QUALITYASSURANCE } from "../../asset/Tags/quality_assurance.svg";
import { ReactComponent as UIUXDESIGN } from "../../asset/Tags/ui_ux_design.svg";
import { ReactComponent as WEB } from "../../asset/Tags/web.svg";

// Tags data
export const JobCategories = [
  {
    name: "Product Designer",
    description:
      "KeplerLab is a VC-backed, stealth, application-only platform for senior product designers to team up with the best companies on their next big thing.",
    elements: {
      time: "30mins ago",
      type: "KeplerLab",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
  {
    name: "UI/UX Designer",
    description:
      "We’re looking for an experienced and talented UI designer to design and shape unique, user-centric design systems and experiences.",
    elements: {
      time: "45mins ago",
      type: "KeplerLab",
      timeKind: "Part-Time",
      level: "Expert",
      price: "$25-$30/hr",
    },
  },
  {
    name: "Senior Python Developer",
    description:
      "The ideal candidate will be responsible for helping us develop a wide variety of projects leveraging PostgreSQL, Django, and Python.",
    elements: {
      time: "1hr ago",
      type: "Infosys",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$20/hr",
    },
  },
  {
    name: "Junior DevOps Engineer",
    description: "We need one to Work with fellow DevOps engineers.",
    elements: {
      time: "2hrs ago",
      type: "N9 IT SOLUTIONS",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
  {
    name: "Web Developer",
    description:
      "Entrust is seeking a Sitecore developer that will perform the accountabilities detailed below and other duties as assigned.",
    elements: {
      time: "2hrs ago",
      type: "Entrust Datacard",
      timeKind: "Part-Time",
      level: "Intermediate",
      price: "$25-$30/hr",
    },
  },
  {
    name: "Quality Specialist",
    description:
      "iGaming company looking for QA Engineer to be based in Malta or Remotely in Europe.",
    elements: {
      time: "3hr ago",
      type: "Pentasia",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
  {
    name: "Product Designer",
    description:
      "KeplerLab is a VC-backed, stealth, application-only platform for senior product designers to team up with the best companies on their next big thing.",
    elements: {
      time: "30mins ago",
      type: "KeplerLab",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
  {
    name: "UI/UX Designer",
    description:
      "We’re looking for an experienced and talented UI designer to design and shape unique, user-centric design systems and experiences.",
    elements: {
      time: "45mins ago",
      type: "KeplerLab",
      timeKind: "Part-Time",
      level: "Expert",
      price: "$25-$30/hr",
    },
  },
  {
    name: "Senior Python Developer",
    description:
      "The ideal candidate will be responsible for helping us develop a wide variety of projects leveraging PostgreSQL, Django, and Python.",
    elements: {
      time: "1hr ago",
      type: "Infosys",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$20/hr",
    },
  },
  {
    name: "Junior DevOps Engineer",
    description: "We need one to Work with fellow DevOps engineers.",
    elements: {
      time: "2hrs ago",
      type: "N9-IT-SOLUTIONS",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
  {
    name: "Web Developer",
    description:
      "Entrust is seeking a Sitecore developer that will perform the accountabilities detailed below and other duties as assigned.",
    elements: {
      time: "2hrs ago",
      type: "Entrust-Datacard",
      timeKind: "Part-Time",
      level: "Intermediate",
      price: "$25-$30/hr",
    },
  },
  {
    name: "Quality Specialist",
    description:
      "iGaming company looking for QA Engineer to be based in Malta or Remotely in Europe.",
    elements: {
      time: "3hr ago",
      type: "Pentasia",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
  {
    name: "Product Designer",
    description:
      "KeplerLab is a VC-backed, stealth, application-only platform for senior product designers to team up with the best companies on their next big thing.",
    elements: {
      time: "30mins ago",
      type: "KeplerLab",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
  {
    name: "UI/UX Designer",
    description:
      "We’re looking for an experienced and talented UI designer to design and shape unique, user-centric design systems and experiences.",
    elements: {
      time: "45mins ago",
      type: "KeplerLab",
      timeKind: "Part-Time",
      level: "Expert",
      price: "$25-$30/hr",
    },
  },
  {
    name: "Senior Python Developer",
    description:
      "The ideal candidate will be responsible for helping us develop a wide variety of projects leveraging PostgreSQL, Django, and Python.",
    elements: {
      time: "1hr ago",
      type: "Infosys",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$20/hr",
    },
  },
  {
    name: "Junior DevOps Engineer",
    description: "We need one to Work with fellow DevOps engineers.",
    elements: {
      time: "2hrs ago",
      type: "N9-IT-SOLUTIONS",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
  {
    name: "Web Developer",
    description:
      "Entrust is seeking a Sitecore developer that will perform the accountabilities detailed below and other duties as assigned.",
    elements: {
      time: "2hrs ago",
      type: "Entrust-Datacard",
      timeKind: "Part-Time",
      level: "Intermediate",
      price: "$25-$30/hr",
    },
  },
  {
    name: "Quality Specialist",
    description:
      "iGaming company looking for QA Engineer to be based in Malta or Remotely in Europe.",
    elements: {
      time: "3hr ago",
      type: "Pentasia",
      timeKind: "Full-Time",
      level: "Intermediate",
      price: "$15/hr",
    },
  },
];

// Define icons for each category
const iconsMap = {
  "Web Frontend": WEB,
  "UI/UX & Product Design": PRODUCTDESIGN,
  "Mobile Application": UIUXDESIGN,
  "QA & DevOps Engineer": DEVOPS,
  "Backend & Database": DEVOPS,
  "Machine Learning": PYTHON,
  "Web Full-Stack": QUALITYASSURANCE,
};

// Default icon
const defaultIcon = PRODUCTDESIGN;

// Add icons to tags
export const getTagsWithIcons = JobCategories.map((tag) => ({
  ...tag,
  icon: iconsMap[tag.name] || defaultIcon,
}));
