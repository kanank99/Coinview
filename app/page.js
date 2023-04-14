import styles from './page.module.css'
import AnimationIntro from './components/AnimationIntro'
import useCoins from './components/CoinData'

export default async function Home() {
  const coins = await useCoins()
  return (
      <>
      <main className={styles.main}>    
        <AnimationIntro coins={coins} />
        <h1 className={styles.title}>
          Keep a watchful eye on the world of cryptocurrencies with <span className={styles.titleTextInHero}>Coinview</span>.
        </h1>
        <div style={{height: 2000}}></div>    
      </main>
      <div className={styles.lightShadowDiv1}></div>
      <div className={styles.lightShadowDiv2}></div>
      </>
  )
}
