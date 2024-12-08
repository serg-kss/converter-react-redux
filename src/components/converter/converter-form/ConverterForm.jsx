import styles from "./ConverterForm.module.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUahToCurrency, getCurrencyToUah, getCurrencyToCurrency } from "../../../redux/actions";
import SvgArrows from "../../utils/svg/svg- arrows/SvgArrows";

export default function ConverterForm() {
  const formTitle = "Конвертер валют";
  const errorMessage = "Помилка";

  const currencyType = {
    USD: 'USD',
    EUR: 'EUR',
    UAH: 'UAH'
  }

  const [defaultValueOut, setDefaultValueOut] = useState(0);
  const [error,  setError] = useState(false);
  
  const dispatch = useDispatch();

  const format = (date) => (date < 10 ? `0${date}` : date.toString());

  const getDateString = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}${format(month)}${format(day)}`;
  };

  const stateData = useSelector((state) => {
    const { exchangeReducer } = state;
    return exchangeReducer.data;
  });

  useEffect(() => {
    if (stateData.length > 0) {
      setDefaultValueOut(stateData[stateData.length - 1].result);
    }
  }, [stateData]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {

    const exchangeAmount = data.exchangeAmount;
    const exchangeCurrency = data.exchangeCurrency;
    const targetCurrency = data.targetCurrency
    const dateInForm = new Date(data.date);

    if ((exchangeCurrency === currencyType.UAH) && (targetCurrency === currencyType.USD || targetCurrency === currencyType.EUR)) {
      dispatch(
        getUahToCurrency(
          targetCurrency,
          getDateString(dateInForm),
          exchangeAmount,
          exchangeCurrency
        )
      )
      setError(false)
    } else if ((exchangeCurrency === currencyType.USD || exchangeCurrency === currencyType.EUR) && (targetCurrency ===currencyType.UAH)){
      dispatch(
        getCurrencyToUah(
          targetCurrency,
          getDateString(dateInForm),
          exchangeAmount,
          exchangeCurrency
        )
      )
      setError(false)
    }else if ((exchangeCurrency === currencyType.USD && targetCurrency ===currencyType.EUR)||(exchangeCurrency === currencyType.EUR && targetCurrency ===currencyType.USD)){
      dispatch(
        getCurrencyToCurrency(
          targetCurrency,
          getDateString(dateInForm),
          exchangeAmount,
          exchangeCurrency
        )
      )
      setError(false)
    }else setError(true)
  };

  return (
    <div className={styles.formContainer}>
      <p className={styles.formTitle}>{formTitle}</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.converterForm}>
        <fieldset className={styles.converterFormContainer}>
          <label className={styles.formLable}>В мене є:</label>
          <fieldset>
            <input
              type="number"
              id="inputCurrencyValue"
              className={styles.formInput}
              {...register("exchangeAmount", { required: true, maxLength: 200 })}
            />
            <select
              id="inputCurrencyOptionIn"
              className={styles.formOption}
              {...register("exchangeCurrency", {
                required: "select one option",
              })}
            >
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </fieldset>
          <input
            className={styles.formDate}
            type="date"
            id="date"
            {...register("date", {
              valueAsDate: true,
              required: true
            })}
          />
        </fieldset>
        <div className={styles.arr}>
          <SvgArrows />
        </div>
        <fieldset className={styles.converterFormContainer}>
          <label className={styles.formLable}>Хочу придбати:</label>
          <fieldset>
            <input
              type="text"
              id="result"
              className={styles.formInput}
              value={defaultValueOut}
              disabled={true}
            />
            <select
              id="targetCurrency"
              className={styles.formOption}
              {...register("targetCurrency", {
                required: "select one option",
              })}
            >
              <option value=""></option>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </fieldset>
          <div className={styles.btnContainer}>
            <button className={styles.formBtn} type="submit">
              Зберегти результат
            </button>
          </div>
        </fieldset>
      </form>
      <div className={styles.errorContainer}>{error ? <p className={styles.errorText}>{errorMessage}</p>:''}</div>
    </div>
  );
}
