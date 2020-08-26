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
    },[filterValue])

    return (
      <div className={styles.drinkSection__wrapper}>
        {console.log("filtered", filtered)}
        {
        filterValue === "all" ? drinkData.map((drink, index) => <SingleDrink drink={drink} key={index} />)
        : 
        !filtered.length ? <p>Sorry, no results found...</p>
        :
        filterValue !== "all" ? filtered.map((drink, index) => <SingleDrink drink={drink} key={index} />)
        :
        null
        }
      </div>
    );
}