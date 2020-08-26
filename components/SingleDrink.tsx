import styles from '../styles/_singleDrink.module.scss'
import { useState } from 'react'


export default function SingleDrink(props) {
  const [drinkCount, setDrinkCount] = useState(0)


    return (
      <div className={styles.drinkWrapper}>
        <div className={styles.drinkWrapper__top}>
          <div className={styles.drinkWrapper__top__left}>
            <img
              className={styles.drinkImage}
              src={props.drink.imageUrl}
              alt=""
            />
          </div>
          <div className={styles.drinkWrapper__top__right}>
            <div>
              <p>{props.drink.amount} L</p>
              <p>CHF {props.drink.price}.-</p>
            </div>
            <div className={styles.drinkWrapper__buttonBox}>
              <button className={styles.countBtn}>
                <span onClick={() => setDrinkCount(drinkCount > 0 ? drinkCount - 1 : 0)}>-</span>
                {drinkCount}
                <span onClick={() => setDrinkCount(drinkCount + 1)}>+</span>
              </button>
              <button onClick={() => {setDrinkCount(0); alert(`${drinkCount} ${props.drink.name} added to basket.`)}}>ADD</button>
            </div>
          </div>
        </div>

        <div className={styles.drinkWrapper__bottom}>
          <p>
            <strong>{props.drink.name}</strong>
          </p>
          <p>
            {props.drink.ingredients.map((ingredient, index) =>
              index != props.drink.ingredients.length - 1
                ? `${ingredient}, `
                : `${ingredient}`
            )}
          </p>
        </div>
      </div>
    );
}