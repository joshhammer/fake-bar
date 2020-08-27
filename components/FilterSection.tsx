import styled from 'styled-components'
import styles from '../styles/_filterSection.module.scss'
import { useState, useEffect } from 'react'
import SingleFilter from '../components/SingleFilter'
import categories from '../data/categories.json'

const FilterButton = styled.button`
    color: var(--main-white);
    background-color: var(--main-blue);
    padding: 5px 10px;
    margin-bottom: .5rem;
    border-radius: 15px;
    outline: none;
    transition: color .3s, background-color .3s;
    &:hover {
        cursor: pointer;
    }
`

export default function FilterSection(props) {
const [invisible, setInvisible] = useState(true)
const [filterIsActive, setFilterIsActive] = useState(false)
const [filterValue, setFilterValue] = useState("all")
const [active, setActive] = useState(0)

function showHideFilters() {
    setInvisible(!invisible)
    setFilterIsActive(!filterIsActive)
}

function passFilterValue() {
    props.getFilter(filterValue)
}

function receiveFilterValue(childValue: string) {
    setFilterValue(childValue)
}

useEffect(() => {
    passFilterValue()
}, [filterValue])

    return (
      <div className={styles.filterSection}>
        <FilterButton onClick={showHideFilters} className={`filterBtn ${filterIsActive ? "isActive" : ""}`}>Filter</FilterButton>
        <div>
          <img
            className={`${styles.filterArrow} ${filterIsActive ? "activeArrow" : ""}`} src="/arrowDown.svg" alt=""/>
        </div>
        <div className={`filterBox ${invisible ? "invisible" : ""}`}>
          <ul className={styles.filterList}>
            {categories.map((category, index) => <SingleFilter category={category} key={index} index={index} getValue={receiveFilterValue} active={active} setActive={setActive}></SingleFilter>)}
          </ul>
        </div>
      </div>
    );
}