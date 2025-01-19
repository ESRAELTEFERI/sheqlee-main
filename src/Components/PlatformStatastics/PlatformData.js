import companyy from "../../asset/PlatformstatIcons/company.png";
import handShake from "../../asset/PlatformstatIcons/handshake.png";
import programmer from "../../asset/PlatformstatIcons/programmer.png";
import classes from "./PlatformStat.module.css";

export const stats = [
  {
    icon: <img src={handShake} alt="Logo" className={classes.iconH} />,
    value: "100K+",
    description: "Total jobs posted on Sheqlee to date",
  },
  {
    icon: <img src={programmer} alt="Logo" className={classes.iconP} />,
    value: "15K+",
    description: "Ethiopian professionals signed up so far",
  },
  {
    icon: <img src={companyy} alt="Logo" className={classes.iconC} />,
    value: "1K+",
    description: "Korean companies posting jobs daily",
  },
];
