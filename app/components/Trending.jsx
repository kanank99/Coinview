import React from 'react'
import Image from 'next/image'
import styles from '../styles/trending.module.css'

async function Trending({ coins }) {
  async function getTrendingCoins() {
    const res = await fetch('https://api.coingecko.com/api/v3/search/trending')
    return await res.json() 
  }
  const trendingCoins = await getTrendingCoins()
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headerText}>Whats Trending 🔥</div>
        </div>
        <div className={styles.trendingListContainer}>
            {trendingCoins.coins.map((coin) => (
                <div className={styles.trendingCoin} key={coin.item.id}>
                    <div className={styles.nameAndImgAndRank}>
                        <img src={coin.item.large} alt={coin.item.name} className={styles.trendingCoinImg}/>
                        <div>
                            <div className={styles.trendingCoinInfo}>{coin.item.name}</div>
                            <div className={styles.trendingCoinInfo} >Rank: #{coin.item.market_cap_rank}</div>
                        </div>
                    </div>
                    <div className={styles.coinBtcPrice}>₿ {coin.item.price_btc}</div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Trending