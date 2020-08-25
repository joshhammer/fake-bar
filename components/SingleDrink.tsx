import styles from '../styles/_singleDrink.module.scss'


export default function SingleDrink(props) {
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
              <button>- 2 +</button>
              <button>ADD</button>
            </div>
          </div>
        </div>

        <div className={styles.drinkWrapper__bottom}>
          <p>
            <strong>{props.drink.name}</strong>
          </p>
          <p>{props.drink.ingredients.map((ingredient) => ingredient)}</p>
        </div>
      </div>
    );
}