import SvgLogoChip from "../svg/svg-logo/SvgLogoChip";
import styles from "./NavLogo.module.css";
import { Link } from "react-router-dom";

function NavLogo(props) {
  return (
    <div className={styles.logo}>
      <SvgLogoChip />
      <Link className={styles.logoTitle} to={props.logoLink.link}>
        {props.logoLink.text}
      </Link>
    </div>
  );
}

export default NavLogo;
