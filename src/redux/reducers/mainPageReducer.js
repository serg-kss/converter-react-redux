
import masterCard from "../../assets/black-card.png";
const initialState = {
  masterCard: {
    link: "/converter",
    img: masterCard,
    title: "Конвертер валют",
    text: "Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.",
    btnText: "Конвертер валют",
    style: {
      title: {color: '#1F1E25'},
      text: {color: '#707C87'},
      link: {color: '#F6F7FF', backgroundColor: '#2C36F2'}
    }
  },
};

export const mainPageReducer = (state = initialState) => {
  return state;
};
