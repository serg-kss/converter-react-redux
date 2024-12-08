import phone from "../../assets/phone.png";
import oldPhone from "../../assets/old-type-phone.png";
import web from "../../assets/web.png";

const initialState = {
  links: [
    { link: "/services", text: "Послуги" },
    { link: "/converter", text: "Конвертер валют" },
    { link: "/contacts", text: "Контакти" },
    { link: "/questions", text: "Задати питання" },
  ],
  logoLink: { link: "/", text: "Чіп Чендж" },
  addres: {
    text: "04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ ЧіпЧендж, 2019-2023",
  },
  phone: [
    { number: "3773", text: "цілодобова підтримка", img: phone },
    {
      number: "8 800 111 22 23",
      text: "Безкожтовно для дзвінків в межах України",
      img: oldPhone,
    },
  ],
  webImg: {web: web},
};

export const footerReducer = (state = initialState) => {
  return state;
};
