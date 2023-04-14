import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'

function AnimationIntro({ coins }) {
  
  let btcChange;

  btcChange = coins.find(coin => coin.symbol === 'btc').price_change_percentage_24h.toFixed(2)

  return (
  <>
    <div className={styles.introAnimationContainer}>
        <div className={styles.row}>
          <div className={styles.rowWithItems1}>
            <div className={styles.itemBox}>
              <div className='imgWithChange'>
                <Image className='coinImg' src="/coins1/1.svg" alt="btc-icon" width={35} height={35} />
                <p className='coinPriceChangeText'>{btcChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/eth.svg" alt="eth-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/ada.svg" alt="ada-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/atom.svg" alt="atom-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/avax.svg" alt="avax-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/sol.svg" alt="sol-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems1}>
            <div className={styles.itemBox}>
              <Image className='coinImg' src="/coins1/1.svg" alt="btc-icon" width={35} height={35} />
              <p className='coinPriceChangeText'>{btcChange}%</p>
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/eth.svg" alt="eth-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/ada.svg" alt="ada-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/atom.svg" alt="atom-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/avax.svg" alt="avax-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/sol.svg" alt="sol-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems1}>
            <div className={styles.itemBox}>
              <Image className='coinImg' src="/coins1/1.svg" alt="btc-icon" width={35} height={35} />
              <p className='coinPriceChangeText'>{btcChange}%</p>
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/eth.svg" alt="eth-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/ada.svg" alt="ada-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/atom.svg" alt="atom-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/avax.svg" alt="avax-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/sol.svg" alt="sol-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems1}>
            <div className={styles.itemBox}>
              <Image className='coinImg' src="/coins1/1.svg" alt="btc-icon" width={35} height={35} />
              <p className='coinPriceChangeText'>{btcChange}%</p>
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/eth.svg" alt="eth-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/ada.svg" alt="ada-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/atom.svg" alt="atom-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/avax.svg" alt="avax-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/sol.svg" alt="sol-icon" width={35} height={35} />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowWithItems2}>
            <div className={styles.itemBox}>
              <Image src="/coins1/ape.svg" alt="ape-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/bch.svg" alt="bch-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/bnb.svg" alt="bnb-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/doge.svg" alt="doge-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/cspr.svg" alt="cspr-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/fil.svg" alt="fil-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems2}>
            <div className={styles.itemBox}>
              <Image src="/coins1/ape.svg" alt="ape-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/bch.svg" alt="bch-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/bnb.svg" alt="bnb-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/doge.svg" alt="doge-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/cspr.svg" alt="cspr-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/fil.svg" alt="fil-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems2}>
            <div className={styles.itemBox}>
              <Image src="/coins1/ape.svg" alt="ape-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/bch.svg" alt="bch-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/bnb.svg" alt="bnb-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/doge.svg" alt="doge-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/cspr.svg" alt="cspr-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/fil.svg" alt="fil-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems2}>
            <div className={styles.itemBox}>
              <Image src="/coins1/ape.svg" alt="ape-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/bch.svg" alt="bch-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/bnb.svg" alt="bnb-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/doge.svg" alt="doge-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/cspr.svg" alt="cspr-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/fil.svg" alt="fil-icon" width={35} height={35} />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowWithItems3}>
            <div className={styles.itemBox}>
              <Image src="/coins1/grt.svg" alt="grt-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/hbar.svg" alt="hbar-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/icp.svg" alt="icp-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/cro.svg" alt="cro-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/link.svg" alt="link-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/ltc.svg" alt="ltc-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems3}>
            <div className={styles.itemBox}>
              <Image src="/coins1/grt.svg" alt="grt-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/hbar.svg" alt="hbar-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/icp.svg" alt="icp-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/cro.svg" alt="cro-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/link.svg" alt="link-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/ltc.svg" alt="ltc-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems3}>
            <div className={styles.itemBox}>
              <Image src="/coins1/grt.svg" alt="grt-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/hbar.svg" alt="hbar-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/icp.svg" alt="icp-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/cro.svg" alt="cro-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/link.svg" alt="link-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/ltc.svg" alt="ltc-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems3}>
            <div className={styles.itemBox}>
              <Image src="/coins1/grt.svg" alt="grt-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/hbar.svg" alt="hbar-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/icp.svg" alt="icp-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/cro.svg" alt="cro-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/link.svg" alt="link-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/ltc.svg" alt="ltc-icon" width={35} height={35} />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowWithItems4}>
            <div className={styles.itemBox}>
              <Image src="/coins1/mana.svg" alt="mana-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/matic.svg" alt="matic-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/shib.svg" alt="shib-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/stx.svg" alt="stx-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/theta.svg" alt="theta-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/xpr.svg" alt="xpr-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems4}>
            <div className={styles.itemBox}>
              <Image src="/coins1/mana.svg" alt="mana-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/matic.svg" alt="matic-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/shib.svg" alt="shib-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/stx.svg" alt="stx-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/theta.svg" alt="theta-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/xpr.svg" alt="xpr-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems4}>
            <div className={styles.itemBox}>
              <Image src="/coins1/mana.svg" alt="mana-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/matic.svg" alt="matic-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/shib.svg" alt="shib-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/stx.svg" alt="stx-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/theta.svg" alt="theta-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/xpr.svg" alt="xpr-icon" width={35} height={35} />
            </div>
          </div>
          <div className={styles.rowWithItems4}>
            <div className={styles.itemBox}>
              <Image src="/coins1/mana.svg" alt="mana-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/matic.svg" alt="matic-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/shib.svg" alt="shib-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/stx.svg" alt="stx-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/theta.svg" alt="theta-icon" width={35} height={35} />
            </div>
            <div className={styles.itemBox}>
              <Image src="/coins1/xpr.svg" alt="xpr-icon" width={35} height={35} />
            </div>
          </div>
        </div>
        <div className={styles.logoItemBox}>
            <Image src="/coins/eye-logo.png" alt="eye-logo" width={50} height={50} />
            <div className={styles.lightShadowDivLogo}></div>
        </div>
        
      </div>
  </>
  )
}

export default AnimationIntro