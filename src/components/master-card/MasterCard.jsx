import styles from "./MasterCard.module.css";
import { Link } from "react-router-dom";

export default function MasterCard(props) {
  return (
    <div
      className={styles.masterCard}
      style={{ backgroundImage: `url(${props.info.imgBack})` }}
    >
      <div className={styles.masterCardContainer}>
        <div className={styles.masterCardInfo}>
          <p className={styles.masterCardTitle} style={props.info.style.title}>
            {props.info.title}
          </p>
          <p className={styles.masterCardText} style={props.info.style.text}>
            {props.info.text}
          </p>
          <Link
            className={styles.materCardLink}
            style={props.info.style.link}
            to={props.info.link}
          >
            {props.info.btnText}
          </Link>
        </div>
        <div className={styles.masterCardPicture}>
          <img src={props.info.img} alt="Mastr Card" />
        </div>
      </div>
    </div>
  );
}
