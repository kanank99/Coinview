import styles from './coinpage.module.css'
import TradingViewWidget from './TradingViewWidget'

export default async function Page({ params }) {
    // async function getCoin() {
    //     const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${params.id}`, { cache: 'no-store' })
    //     return await res.json() 
    //   }
    //   const searchedCoin = await getCoin()
    //   console.log(searchedCoin.coins[0].name)
    return <div className={styles.container}>
        <div className={styles.containerContent}>
            {/* <div className={styles.coinDetails}>
                <img src={searchedCoin.coins[0].large} alt="coin logo" style={{width: '100px', height: '100px'}}/>
                <h1>Name: {searchedCoin.coins[0].name}</h1>
                <h2>Symbol: {searchedCoin.coins[0].symbol}</h2>
                <h2>Rank: {searchedCoin.coins[0].market_cap_rank}</h2>
            </div> */}
            <TradingViewWidget coin={params.id}/>
        </div>
    </div>
}

