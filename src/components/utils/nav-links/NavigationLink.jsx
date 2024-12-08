import SvgLogin from "../svg/svg-login/SvgLogin";
import styles from "./NavLink.module.css";
import { Link } from "react-router-dom";

function NavigationLink(props) {
  const auth = "/auth";
  const noSvg = "";
  return (
    <div className={styles.linkContainer}>
      {props.link.link === auth ? <SvgLogin /> : noSvg}
      <Link className={styles.link} to={props.link.link}>
        {props.link.text}
      </Link>
    </div>
  );
}

export default NavigationLink;
