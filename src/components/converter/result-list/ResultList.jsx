import SvgArrow from "../../utils/svg/svg-arrow/SvgArrow";
import styles from "./ResultList.module.css";
import { useDispatch } from "react-redux";
import { exchangeDataClean } from "../../../redux/actions";

export default function ResultList(props) {
  const staticText = {
    title: "Історія конвертації",
    btnName: "Очистити історію",
  };

  const dispatch = useDispatch();

  function cleanResults() {
    dispatch(exchangeDataClean());
  }
console.log(props.info)
  return (
    <div className={styles.resultList}>
      <div className={styles.resultListHeader}>
        <p className={styles.resultListTitle}>{staticText.title}</p>
        <button onClick={cleanResults} className={styles.resultListBtn}>
          {staticText.btnName}
        </button>
      </div>
      <div className={styles.resultListContainer}>
        <ul className={styles.list}>
          {props.info.map((el, index) => {
            return (
              <li className={styles.record} key={index}>
                <span className={styles.recordDate}>{el.exchangedate}</span>
                <span className={styles.recordText}>{el.exchangeAmount}</span>
                <span className={styles.recordText}>{el.exchangeCurrency}</span>
                <SvgArrow />
                <span className={styles.recordText}>{el.result}</span>
                <span className={styles.recordText}>{el.targetCurrency}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
