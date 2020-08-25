import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/_home.module.scss'


export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Fake Bar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
    </div>
  )
}
