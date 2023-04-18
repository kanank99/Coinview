import React from 'react'
import styles from '../styles/trending.module.css'

async function Trending({ coins }) {
  async function getTrendingCoins() {
    const res = await fetch('https://api.coingecko.com/api/v3/search/trending')
    return await res.json() 
  }
  const trendingCoins = await getTrendingCoins()
  console.log(trendingCoins.coins)
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headerText}>What's Trending 🔥</div>
        </div>
        <div className={styles.animatedContainer}>
            <div className={styles.trendingListContainer}>
                {trendingCoins.coins.map((coin) => (
                    <div className={styles.trendingCoin} key={coin.item.id}>
                        <div className={styles.nameAndImgAndRank}>
                            <img src={coin.item.large} alt={coin.item.name} className={styles.trendingCoinImg}/>
                            <div className={styles.nameAndRank}>
                                <h2 className={styles.coinName}>{coin.item.name}</h2>
                                <div className={styles.coinRank} >Rank: #{coin.item.market_cap_rank}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default Trending