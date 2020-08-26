import styled from 'styled-components'
import styles from '../styles/_filterSection.module.scss'
import { useState, useEffect } from 'react'

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

function showHideFilters() {
    setInvisible(!invisible)
    setFilterIsActive(!filterIsActive)
}

function passFilterValue() {
    props.getFilter(filterValue)
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
            <li onClick={() => {setFilterValue('all')}}>all</li>
            <li onClick={() => {setFilterValue('beer')}}>beer</li>
            <li onClick={() => {setFilterValue('wine')}}>wine</li>
            <li onClick={() => {setFilterValue('others')}}>others</li>
            <li onClick={() => {setFilterValue('shots')}}>shots</li>
            <li onClick={() => {setFilterValue('cocktails')}}>cocktails</li>
            <li onClick={() => {setFilterValue('longdrinks')}}>longdrinks</li>
            <li onClick={() => {setFilterValue('softdrinks')}}>softdrinks</li>
            
          </ul>
        </div>
      </div>
    );
}