import drinkData from '../data/drinkData.json'
import styles from '../styles/_drinkSection.module.scss'
import SingleDrink from './SingleDrink'

export default function DrinkSection() {
    return(
        <div className={styles.drinkSection__wrapper}>
            {drinkData.map((drink, index) => {
                return <SingleDrink drink={drink} key={index}/>
            })}
        </div>
    )
}