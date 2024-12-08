import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import NavLogo from "../utils/nav-logo/NavLogo";
import NavigationLink from "../utils/nav-links/NavigationLink";
import MasterCard from "../master-card/MasterCard";

export default function Header() {
  const headerData = useSelector((state) => {
    const { headerReducer } = state;
    return headerReducer;
  });

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <NavLogo logoLink={headerData.logoLink} />
      </div>
      <div className={styles.headerNavigation}>
        <ul className={styles.navigationList}>
          {headerData.links.map((link, index) => (
            <li key={index} className={styles.navigationLinks}>
              <NavigationLink link={link} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.headerAuth}>
        <NavigationLink link={headerData.authLink} />
      </div>
      <MasterCard info={headerData.masterCard} />
    </header>
  );
}
