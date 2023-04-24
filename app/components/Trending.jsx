// "use client"

import React from 'react'
import Link from 'next/link'
import styles from '../styles/trending.module.css'

async function Trending() {
  async function getTrendingCoins() {
    const res = await fetch('https://api.coingecko.com/api/v3/search/trending', { cache: 'no-store' })
    return await res.json() 
  }
  const trendingCoins = await getTrendingCoins()
//   console.log(trendingCoins.coins)
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headerText}>What's Trending 🔥</div>
        </div>
        <div className={styles.animatedContainer}>
            <div className={styles.trendingListContainer}>
                {trendingCoins.coins.map((coin) => (
                    <Link href={`/coinPage/${coin.item.symbol}`} key={coin.item.id}>
                        <div className={styles.trendingCoin}>
                            <div className={styles.nameAndImgAndRank}>
                                <img src={coin.item.large} alt={coin.item.name} className={styles.trendingCoinImg}/>
                                <div className={styles.nameAndRank}>
                                    <h2 className={styles.coinName}>{coin.item.name}</h2>
                                    <div className={styles.coinRank} >Rank: #{coin.item.market_cap_rank}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>

  )
}

export default Trending