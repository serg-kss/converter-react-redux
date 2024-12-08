import ConverterForm from "./converter-form/ConverterForm";
import styles from "./Converter.module.css";
import ResultList from "./result-list/ResultList";
import { useSelector } from "react-redux";

export default function Converter() {
  const colorFormBackground = "#F6F7FF";

  const exchangeDataHistory = useSelector((state) => {
    const { exchangeReducer } = state;
    return exchangeReducer.data;
  });

  return (
    <div className={styles.converter}>
      <div
        className={styles.converterContainer}
        style={{ backgroundColor: colorFormBackground }}
      >
        <ConverterForm />
      </div>
      {exchangeDataHistory.length > 0 ? (
        <div className={styles.converterContainer}>
          <ResultList info={exchangeDataHistory} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
