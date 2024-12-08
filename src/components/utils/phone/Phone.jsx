import styles from "./Phone.module.css";

function Phone(props) {
  return (
    <div className={styles.phoneContainer}>
      <img className={styles.phoneImg} src={props.phone.img} alt="phone" />
      <p className={styles.phoneNumber}>{props.phone.number}</p>
      <p className={styles.phoneText}>{props.phone.text}</p>
    </div>
  );
}

export default Phone;
