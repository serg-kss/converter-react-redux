import {
  GET_EXCHANGE_DATA_UAH_TO_CURRENCY,
  GET_EXCHANGE_DATA_CURRENCY_TO_UAH,
  GET_EXCHANGE_DATA_CURRENCY_TO_CURRENCY,
  DELETE_EXCHANGE_DATA,
} from "./types";

export function getUahToCurrency(
  targetCurrency,
  date,
  exchangeAmount,
  exchangeCurrency
) {
  const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&valcode=${targetCurrency}&date=${date}`;
  return async (dispatch) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    const exchangeData = Object.assign(jsonData[0], {
      exchangeAmount: exchangeAmount,
      exchangeCurrency: exchangeCurrency,
      targetCurrency: targetCurrency,
    });
    dispatch({
      type: GET_EXCHANGE_DATA_UAH_TO_CURRENCY,
      data: exchangeData,
    });
  };
}

export function getCurrencyToCurrency(
  targetCurrency,
  date,
  exchangeAmount,
  exchangeCurrency
) {
  const urlexchangeCurrency = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&valcode=${exchangeCurrency}&date=${date}`;
  const urltargetCurrency = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&valcode=${targetCurrency}&date=${date}`;
  return async (dispatch) => {
    const responseExchangeCurrency = await fetch(urlexchangeCurrency);
    const jsonDataExchangeCurrency = await responseExchangeCurrency.json();

    const responseTargetCurrency = await fetch(urltargetCurrency);
    const jsonDataTargetCurrency = await responseTargetCurrency.json();

    dispatch({
      type: GET_EXCHANGE_DATA_CURRENCY_TO_CURRENCY,
      data: [
        { exchangeCurrency: jsonDataExchangeCurrency },
        { targetCurrency: jsonDataTargetCurrency },
        { exchangeAmount: exchangeAmount },
      ],
    });
  };
}

export function getCurrencyToUah(
  targetCurrency,
  date,
  exchangeAmount,
  exchangeCurrency
) {
  const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&valcode=${exchangeCurrency}&date=${date}`;
  return async (dispatch) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    const exchangeData = Object.assign(jsonData[0], {
      exchangeAmount: exchangeAmount,
      targetCurrency: targetCurrency,
      exchangeCurrency: exchangeCurrency,
    });
    dispatch({
      type: GET_EXCHANGE_DATA_CURRENCY_TO_UAH,
      data: exchangeData,
    });
  };
}

export function exchangeDataClean() {
  return {
    type: DELETE_EXCHANGE_DATA,
  };
}
