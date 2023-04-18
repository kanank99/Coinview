import styles from './page.module.css'
import AnimationIntro from './components/AnimationIntro'
import Trending from './components/Trending'
import CoinList from './components/CoinList'

export default function Home() {
  return (
      <>
        <main className={styles.main}>    
          <AnimationIntro />
          <h1 className={styles.title}>
            Keep a watchful eye on the world of cryptocurrencies with <span className={styles.titleTextInHero}>Coinview</span>.
          </h1>  
          <Trending /> 
          <CoinList />
          <div style={{height: 2000}}></div> 
        </main>
        <div className={styles.lightShadowDiv1}></div>
        <div className={styles.lightShadowDiv2}></div>
      </>
  )
}
