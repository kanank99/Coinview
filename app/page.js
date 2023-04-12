import styles from './page.module.css'
import AnimationIntro from './AnimationIntro'

export default function Home() {
  return (
    <main className={styles.main}>    
      <AnimationIntro />
      <h1 className={styles.title}>
        Keep a watchful eye on the world of cryptocurrencies with Coinview.
      </h1>
      <div style={{height: 2000}}></div>
    </main>
  )
}
