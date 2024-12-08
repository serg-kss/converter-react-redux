import styles from "./Footer.module.css";
import SvgLogoChip from "../utils/svg/svg-logo/SvgLogoChip";
import { useSelector } from "react-redux";
import NavigationLink from "../utils/nav-links/NavigationLink";
import Phone from "../utils/phone/Phone";

export default function Footer() {
  const footerInfo = useSelector((state) => {
    const { footerReducer } = state;
    return footerReducer;
  });

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <SvgLogoChip />
          <p className={styles.logoTitle}>{footerInfo.logoLink.text}</p>
        </div>
        <p className={styles.logoText}>{footerInfo.addres.text}</p>
      </div>
      <ul className={styles.footerContainer}>
        {footerInfo.links.map((element, index) => (
          <li key={index} className={styles.navigationLinks}>
            <NavigationLink link={element} />
          </li>
        ))}
      </ul>
      {footerInfo.phone.map((el, index) => {
        return (
          <div key={index}>
            <Phone phone={el} />
          </div>
        );
      })}
      <div className={styles.footerContainer}>
        <img src={footerInfo.webImg.web} alt="socialWeb" />
      </div>
    </div>
  );
}
