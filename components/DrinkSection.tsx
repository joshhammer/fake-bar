import drinkData from '../data/drinkData.json'
import styles from '../styles/_drinkSection.module.scss'
import SingleDrink from './SingleDrink'
import { useState, useEffect } from 'react'

export default function DrinkSection(props) {

    let filterValue: string = props.filterValue
    const [filtered, setFiltered] = useState([])
    
    useEffect(() => {

        setFiltered(drinkData.filter((drink, index) => {
          return drink.category === filterValue ? (
            <SingleDrink drink={drink} key={index} />
          ) : null;
        }));

        console.log("Drinks are updated", filterValue)
        console.log("useEffect filtered Array", filtered)

    },[filterValue])

    return(
        <div className={styles.drinkSection__wrapper}>
            {/* {drinkData.map((drink, index) => {
                return <SingleDrink drink={drink} key={index}/>
            })} */}
            {console.log('RENDER')}
            {filtered.map((drink, index) => {
                return <SingleDrink drink={drink} key={index} />
            })}
        </div>
    )
}