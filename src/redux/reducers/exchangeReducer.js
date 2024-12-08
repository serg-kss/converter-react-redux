import {
  GET_EXCHANGE_DATA_UAH_TO_CURRENCY,
  GET_EXCHANGE_DATA_CURRENCY_TO_UAH,
  GET_EXCHANGE_DATA_CURRENCY_TO_CURRENCY,
  DELETE_EXCHANGE_DATA,
} from "../types";

const initialState = {
  data: [],
};

export const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCHANGE_DATA_UAH_TO_CURRENCY:
      const { exchangeAmount, rate } = action.data;
      const resultExchange = (
        parseFloat(exchangeAmount) / parseFloat(rate)
      ).toFixed(2);
      const result = Object.assign(action.data, { result: resultExchange });
      return {
        ...state,
        data: [...state.data, result],
      };
    case GET_EXCHANGE_DATA_CURRENCY_TO_UAH:
      return (() => {
        const { exchangeAmount, rate } = action.data;
        const resultExchange = (
          parseFloat(exchangeAmount) * parseFloat(rate)
        ).toFixed(2);
        const result = Object.assign(action.data, { result: resultExchange });
        return {
          ...state,
          data: [...state.data, result],
        };
      })();
    case GET_EXCHANGE_DATA_CURRENCY_TO_CURRENCY:
        return (() => {
            const exchangeAmount = action.data[2].exchangeAmount;
            const exchangeCurrencyRate = action.data[0].exchangeCurrency[0].rate
            const targetCurrencyRate = action.data[1].targetCurrency[0].rate
            const targetCurrency = action.data[1].targetCurrency[0].cc
            const exchangedate = action.data[0].exchangeCurrency[0].exchangedate
            const exchangeCurrency = action.data[0].exchangeCurrency[0].cc
            const resultExchange = (parseFloat(exchangeAmount)*parseFloat(exchangeCurrencyRate)/parseFloat(targetCurrencyRate)).toFixed(2)
            const result = {
                result: resultExchange,
                exchangeAmount: exchangeAmount,
                exchangeCurrency: exchangeCurrency,
                exchangedate: exchangedate,
                targetCurrency: targetCurrency
            }
            return {
                ...state,
                data: [...state.data, result],
              };
        })()
    case DELETE_EXCHANGE_DATA:
      return {
        ...state,
        data: initialState.data,
      };
    default:
      return state;
  }
};
