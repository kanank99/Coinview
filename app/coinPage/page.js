'use client'

import styles from './coinpage.module.css'
import CoinId from './[id]';

export default function Home() {
  return (
      <>
          <h1 className={styles.title}>
            Keep a watchful eye on the world of cryptocurrencies with <span className={styles.titleTextInHero}>Coinview</span>.
          </h1>  
          <CoinId />
      </>
  )
}
