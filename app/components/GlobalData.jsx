import React from 'react'
import styles from '../styles/globaldata.module.css'

 async function GlobalData() {
    async function getGlobalData() {
        const res = await fetch('https://api.coingecko.com/api/v3/global')
        return await res.json() 
      }
    const globalData = await getGlobalData()
  return (
    <div className={styles.container}>
        <div className={styles.categoryDiv}>
            <div className={styles.globalDataTextTitle}>Total Market Cap</div>
            <div className={styles.globalDataTextData}>${globalData.data.total_market_cap.usd.toLocaleString()}</div>
        </div>
        <div className={styles.categoryDiv}>
            <div className={styles.globalDataTextTitle}>Total Volume 24Hr</div>
            <div className={styles.globalDataTextData}>${globalData.data.total_volume.usd.toLocaleString()}</div>
        </div>
        <div className={styles.categoryDiv}>
            <div className={styles.globalDataTextTitle}>Bitcoin Dominance</div>
            <div className={styles.globalDataTextData}>{globalData.data.market_cap_percentage.btc.toFixed(2)}%</div>
        </div>
        <div className={styles.categoryDiv}>
            <div className={styles.globalDataTextTitle}>Cryptocurrencies</div>
            <div className={styles.globalDataTextData}>{globalData.data.active_cryptocurrencies.toLocaleString()}</div>
        </div>
        <div className={styles.categoryDiv}>
            <div className={styles.globalDataTextTitle}>Markets</div>
            <div className={styles.globalDataTextData}>{globalData.data.markets.toLocaleString()}</div>
        </div>
    </div>
  )
}

export default GlobalData