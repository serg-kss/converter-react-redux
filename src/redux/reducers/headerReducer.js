import masterCardBackGround from "../../assets/master-card-back.png";
import masterCard from "../../assets/master-card.png";
const initialState = {
  links: [
    { link: "/services", text: "Послуги" },
    { link: "/converter", text: "Конвертер валют" },
    { link: "/contacts", text: "Контакти" },
    { link: "/questions", text: "Задати питання" },
  ],
  logoLink: { link: "/", text: "Чіп Чендж" },
  authLink: { link: "/auth", text: "Особистий кабінет" },
  masterCard: {
    link: "/converter",
    imgBack: masterCardBackGround,
    img: masterCard,
    title: "Чіп Чендж",
    text: "Обмінник валют - навчальний",
    btnText: "Конвертер валют",
    style: {
      title: {color: '#F6F7FF'},
      text: {color: '#E0E1EA'},
      link: {color: '#707C87', backgroundColor: 'white'}
    }
  },
};

export const headerReducer = (state = initialState) => {
  return state;
};
