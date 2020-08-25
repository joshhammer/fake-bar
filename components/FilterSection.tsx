import styled from 'styled-components'
import styles from '../styles/_filterSection.module.scss'
import { useState } from 'react'

const FilterButton = styled.button`
    border: 1px solid var(--main-white);
    color: var(--main-white);
    background-color: var(--main-blue);
    padding: 5px 10px;
    margin-bottom: 1rem;
    border-radius: 15px;
    outline: none;
    &:hover {
        cursor: pointer;
    }
`

export default function FilterSection() {
const [invisible, setInvisible] = useState(true)
const [filterIsActive, setFilterIsActive] = useState(false)

function showHideFilters() {
    setInvisible(!invisible)
    setFilterIsActive(!filterIsActive)
}

    return(
        <div className={styles.filterSection}>
            <FilterButton onClick={showHideFilters} className={`filterBtn ${filterIsActive ? 'isActive' : ''}`}>Filter</FilterButton>
            <div className={`${styles.filterBox} ${invisible ? 'invisible' : ''}`}>
                <ul className={styles.filterList}>
                    <li>all</li>
                    <li>beer</li>
                    <li>wine</li>
                    <li>others</li>
                    <li>shots</li>
                    <li>cocktails</li>
                    <li>longdrinks</li>
                    <li>softdrinks</li>
                </ul>
            </div>
        </div>
    )
}