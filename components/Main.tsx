import styles from '../styles/_main.module.scss'
import styled from 'styled-components'
import FilterSection from './FilterSection'
import DrinkSection from './DrinkSection'

const PageTitle = styled.h1`
    color: white;
    font-family: "Quicksand", sans-serif;
    font-weight: 300;
    margin: 0;
    text-align: center;
    letter-spacing: 2px;
    margin: 4rem 0 2rem 0;
`

const MainDescription = styled.p`
    color: white;
    text-align: center;
    min-width: 300px;
    width: 40%;
    font-size: 14px;
    line-height: 1.25;
    letter-spacing: 1px;
    margin-bottom: 4rem;
`

export default function Main() {
    return(
        <main className={styles.mainContainer}>
            <PageTitle>Bla Bla Bar</PageTitle>
            <MainDescription>In der Bar und Smokers’ Lounge kann man sich hervorragend den Genüssen des Lebens hingeben. 
                Mit je 50 Plätzen gibt es ausreichend Platz, sich frei zu entfalten. Bezüglich Cocktail- und Zigarrensortiment bleiben keine Wünsche offen. 
                In der Smokers’ Lounge kann man sich gediegen zurückziehen und ungestört dem Genuss des Rauchens frönen.</MainDescription>
            <FilterSection />
            <DrinkSection />
        </main>
    )
}