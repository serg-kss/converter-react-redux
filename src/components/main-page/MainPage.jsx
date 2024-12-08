import MasterCard from '../master-card/MasterCard'
import styles from './MainPage.module.css'
import { useSelector } from "react-redux";

export default function MainPage () {
    const mainPageData = useSelector((state) => {
        const { mainPageReducer } = state;
        return mainPageReducer;
      });
    return(
        <div className={styles.mainPage}>
            <MasterCard info={mainPageData.masterCard}/>
        </div>
    )
}