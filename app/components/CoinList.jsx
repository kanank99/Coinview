import React from 'react'
import GlobalData from './GlobalData'
import styles from '../styles/coinlist.module.css'

function CoinList() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headerText}>Global 🌐</div>
        </div>
        <GlobalData />
        <div className={styles.coinlistContainer}>

        </div>
    </div>
  )
}

export default CoinList