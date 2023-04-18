
import React from 'react'
import GlobalData from './GlobalData'
import styles from '../styles/coinlist.module.css'

async function CoinList() {

  async function getTopCoins() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', { cache: 'no-store' })
    return await res.json() 
  }

  const topCoins = await getTopCoins()

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headerText}>Global 🌐</div>
        </div>
        <GlobalData />
        <div className={styles.coinlistContainer}>
            <div className={styles.coinlistHeader}>
                <div className={styles.coinlistRank}>#</div>
                <div className={styles.coinlistName}>Name</div>
                <div className={styles.coinlistPrice}>Price</div>
                <div className={styles.coinlistVolume}>Volume</div>
                <div className={styles.coinlistChange}>24Hr %</div>
                <div className={styles.coinlistMarketcap}>Market Cap</div>
            </div>
            <div className={styles.coinlist}>
                {topCoins.map((coin) => (
                    <div className={styles.coinlistCoin} key={coin.id}>
                        <div className={styles.coinlistRank}>{coin.market_cap_rank}</div>
                        <div className={styles.coinlistName}>
                            <img src={coin.image} alt={coin.name} className={styles.coinlistCoinImg}/>
                            <div className={styles.coinlistNameText}>{coin.name}</div>
                            <div className={styles.coinlistSymbol}>{coin.symbol.toUpperCase()}</div>
                        </div>
                        <div className={styles.coinlistPrice}>${coin.current_price.toLocaleString()}</div>
                        <div className={styles.coinlistVolume}>${coin.total_volume.toLocaleString()}</div>
                        <div className={styles.coinlistChange} style={coin.price_change_percentage_24h > 0 ? {color: '#00ff00'} : {color: '#ff0000'}}>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className={styles.coinlistMarketcap}>${coin.market_cap.toLocaleString()}</div>
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default CoinList