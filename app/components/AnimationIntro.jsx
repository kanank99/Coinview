import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'

function AnimationIntro({ coins }) {
  
  let btcChange;
  let btcColor;
  let ethChange;
  let ethColor;
  let adaChange;
  let adaColor;
  let atomChange;
  let atomColor;
  let avaxChange;
  let avaxColor;
  let solChange;
  let solColor;
  let apeChange;
  let apeColor;
  let bchChange
  let bchColor
  let bnbChange
  let bnbColor
  let dogeChange
  let dogeColor
  let csprChange
  let csprColor
  let filChange
  let filColor
  let grtChange
  let grtColor
  let hbarChange
  let hbarColor
  let icpChange
  let icpColor
  let croChange
  let croColor
  let linkChange
  let linkColor
  let ltcChange
  let ltcColor
  let manaChange
  let manaColor
  let maticChange
  let maticColor
  let shibChange
  let shibColor
  let stxChange
  let stxColor
  let thetaChange
  let thetaColor
  let crvChange
  let crvColor

  btcChange = coins.find(coin => coin.symbol === 'btc').price_change_percentage_24h.toFixed(2)
  btcColor = btcChange > 0 ? styles.green : styles.red
  ethChange = coins.find(coin => coin.symbol === 'eth').price_change_percentage_24h.toFixed(2)
  ethColor = ethChange > 0 ? styles.green : styles.red
  adaChange = coins.find(coin => coin.symbol === 'ada').price_change_percentage_24h.toFixed(2)
  adaColor = adaChange > 0 ? styles.green : styles.red
  atomChange = coins.find(coin => coin.symbol === 'atom').price_change_percentage_24h.toFixed(2)
  atomColor = atomChange > 0 ? styles.green : styles.red
  avaxChange = coins.find(coin => coin.symbol === 'avax').price_change_percentage_24h.toFixed(2)
  avaxColor = avaxChange > 0 ? styles.green : styles.red
  solChange = coins.find(coin => coin.symbol === 'sol').price_change_percentage_24h.toFixed(2)
  solColor = solChange > 0 ? styles.green : styles.red
  apeChange = coins.find(coin => coin.symbol === 'ape').price_change_percentage_24h.toFixed(2)
  apeColor = apeChange > 0 ? styles.green : styles.red
  bchChange = coins.find(coin => coin.symbol === 'bch').price_change_percentage_24h.toFixed(2)
  bchColor = bchChange > 0 ? styles.green : styles.red
  bnbChange = coins.find(coin => coin.symbol === 'bnb').price_change_percentage_24h.toFixed(2)
  bnbColor = bnbChange > 0 ? styles.green : styles.red
  dogeChange = coins.find(coin => coin.symbol === 'doge').price_change_percentage_24h.toFixed(2)
  dogeColor = dogeChange > 0 ? styles.green : styles.red
  csprChange = coins.find(coin => coin.symbol === 'cspr').price_change_percentage_24h.toFixed(2)
  csprColor = csprChange > 0 ? styles.green : styles.red
  filChange = coins.find(coin => coin.symbol === 'fil').price_change_percentage_24h.toFixed(2)
  filColor = filChange > 0 ? styles.green : styles.red
  grtChange = coins.find(coin => coin.symbol === 'grt').price_change_percentage_24h.toFixed(2)
  grtColor = grtChange > 0 ? styles.green : styles.red
  hbarChange = coins.find(coin => coin.symbol === 'hbar').price_change_percentage_24h.toFixed(2)
  hbarColor = hbarChange > 0 ? styles.green : styles.red
  icpChange = coins.find(coin => coin.symbol === 'icp').price_change_percentage_24h.toFixed(2)
  icpColor = icpChange > 0 ? styles.green : styles.red
  croChange = coins.find(coin => coin.symbol === 'cro').price_change_percentage_24h.toFixed(2)
  croColor = croChange > 0 ? styles.green : styles.red
  linkChange = coins.find(coin => coin.symbol === 'link').price_change_percentage_24h.toFixed(2)
  linkColor = linkChange > 0 ? styles.green : styles.red
  ltcChange = coins.find(coin => coin.symbol === 'ltc').price_change_percentage_24h.toFixed(2)
  ltcColor = ltcChange > 0 ? styles.green : styles.red
  manaChange = coins.find(coin => coin.symbol === 'mana').price_change_percentage_24h.toFixed(2)
  manaColor = manaChange > 0 ? styles.green : styles.red
  maticChange = coins.find(coin => coin.symbol === 'matic').price_change_percentage_24h.toFixed(2)
  maticColor = maticChange > 0 ? styles.green : styles.red
  shibChange = coins.find(coin => coin.symbol === 'shib').price_change_percentage_24h.toFixed(2)
  shibColor = shibChange > 0 ? styles.green : styles.red
  stxChange = coins.find(coin => coin.symbol === 'stx').price_change_percentage_24h.toFixed(2)
  stxColor = stxChange > 0 ? styles.green : styles.red
  thetaChange = coins.find(coin => coin.symbol === 'theta').price_change_percentage_24h.toFixed(2)
  thetaColor = thetaChange > 0 ? styles.green : styles.red
  crvChange = coins.find(coin => coin.symbol === 'crv').price_change_percentage_24h.toFixed(2)
  crvColor = crvChange > 0 ? styles.green : styles.red



  return (
  <>
    <div className={styles.introAnimationContainer}>
        <div className={styles.row}>
          <div className={styles.rowWithItems1}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/1.svg" alt="btc-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${btcColor}`}>{btcChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/eth.svg" alt="eth-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${ethColor}`}>{ethChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ada.svg" alt="ada-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${adaColor}`}>{adaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/atom.svg" alt="atom-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${atomColor}`}>{atomChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/avax.svg" alt="avax-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${avaxColor}`}>{avaxChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/sol.svg" alt="sol-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${solColor}`}>{solChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems1}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/1.svg" alt="btc-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${btcColor}`}>{btcChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/eth.svg" alt="eth-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${ethColor}`}>{ethChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ada.svg" alt="ada-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${adaColor}`}>{adaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/atom.svg" alt="atom-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${atomColor}`}>{atomChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/avax.svg" alt="avax-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${avaxColor}`}>{avaxChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/sol.svg" alt="sol-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${solColor}`}>{solChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems1}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/1.svg" alt="btc-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${btcColor}`}>{btcChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/eth.svg" alt="eth-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${ethColor}`}>{ethChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ada.svg" alt="ada-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${adaColor}`}>{adaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/atom.svg" alt="atom-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${atomColor}`}>{atomChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/avax.svg" alt="avax-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${avaxColor}`}>{avaxChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/sol.svg" alt="sol-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${solColor}`}>{solChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems1}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/1.svg" alt="btc-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${btcColor}`}>{btcChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/eth.svg" alt="eth-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${ethColor}`}>{ethChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ada.svg" alt="ada-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${adaColor}`}>{adaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/atom.svg" alt="atom-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${atomColor}`}>{atomChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/avax.svg" alt="avax-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${avaxColor}`}>{avaxChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/sol.svg" alt="sol-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${solColor}`}>{solChange}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowWithItems2}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ape.svg" alt="ape-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${apeColor}`}>{apeChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/bch.svg" alt="bch-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${bchColor}`}>{bchChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/bnb.svg" alt="bnb-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${bnbColor}`}>{bnbChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/doge.svg" alt="doge-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${dogeColor}`}>{dogeChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/cspr.svg" alt="cspr-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${csprColor}`}>{csprChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/fil.svg" alt="fil-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${filColor}`}>{filChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems2}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ape.svg" alt="ape-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${apeColor}`}>{apeChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/bch.svg" alt="bch-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${bchColor}`}>{bchChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/bnb.svg" alt="bnb-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${bnbColor}`}>{bnbChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/doge.svg" alt="doge-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${dogeColor}`}>{dogeChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/cspr.svg" alt="cspr-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${csprColor}`}>{csprChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/fil.svg" alt="fil-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${filColor}`}>{filChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems2}>
          <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ape.svg" alt="ape-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${apeColor}`}>{apeChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/bch.svg" alt="bch-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${bchColor}`}>{bchChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/bnb.svg" alt="bnb-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${bnbColor}`}>{bnbChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/doge.svg" alt="doge-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${dogeColor}`}>{dogeChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/cspr.svg" alt="cspr-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${csprColor}`}>{csprChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/fil.svg" alt="fil-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${filColor}`}>{filChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems2}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ape.svg" alt="ape-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${apeColor}`}>{apeChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/bch.svg" alt="bch-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${bchColor}`}>{bchChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/bnb.svg" alt="bnb-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${bnbColor}`}>{bnbChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/doge.svg" alt="doge-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${dogeColor}`}>{dogeChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/cspr.svg" alt="cspr-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${csprColor}`}>{csprChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/fil.svg" alt="fil-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${filColor}`}>{filChange}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowWithItems3}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/grt.svg" alt="grt-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${grtColor}`}>{grtChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/hbar.svg" alt="hbar-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${hbarColor}`}>{hbarChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/icp.svg" alt="icp-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${icpColor}`}>{icpChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/cro.svg" alt="cro-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${croColor}`}>{croChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/link.svg" alt="link-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${linkColor}`}>{linkChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ltc.svg" alt="ltc-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${ltcColor}`}>{ltcChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems3}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/grt.svg" alt="grt-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${grtColor}`}>{grtChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/hbar.svg" alt="hbar-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${hbarColor}`}>{hbarChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/icp.svg" alt="icp-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${icpColor}`}>{icpChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/cro.svg" alt="cro-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${croColor}`}>{croChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/link.svg" alt="link-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${linkColor}`}>{linkChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ltc.svg" alt="ltc-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${ltcColor}`}>{ltcChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems3}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/grt.svg" alt="grt-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${grtColor}`}>{grtChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/hbar.svg" alt="hbar-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${hbarColor}`}>{hbarChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/icp.svg" alt="icp-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${icpColor}`}>{icpChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/cro.svg" alt="cro-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${croColor}`}>{croChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/link.svg" alt="link-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${linkColor}`}>{linkChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ltc.svg" alt="ltc-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${ltcColor}`}>{ltcChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems3}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/grt.svg" alt="grt-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${grtColor}`}>{grtChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/hbar.svg" alt="hbar-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${hbarColor}`}>{hbarChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/icp.svg" alt="icp-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${icpColor}`}>{icpChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/cro.svg" alt="cro-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${croColor}`}>{croChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/link.svg" alt="link-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${linkColor}`}>{linkChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/ltc.svg" alt="ltc-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${ltcColor}`}>{ltcChange}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowWithItems4}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/mana.svg" alt="mana-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${manaColor}`}>{manaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/matic.svg" alt="matic-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${maticColor}`}>{maticChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/shib.svg" alt="shib-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${shibColor}`}>{shibChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/stx.svg" alt="stx-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${stxColor}`}>{stxChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/theta.svg" alt="theta-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${thetaColor}`}>{thetaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/crv.svg" alt="crv-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${crvColor}`}>{crvChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems4}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/mana.svg" alt="mana-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${manaColor}`}>{manaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/matic.svg" alt="matic-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${maticColor}`}>{maticChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/shib.svg" alt="shib-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${shibColor}`}>{shibChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/stx.svg" alt="stx-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${stxColor}`}>{stxChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/theta.svg" alt="theta-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${thetaColor}`}>{thetaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/crv.svg" alt="crv-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${crvColor}`}>{crvChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems4}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/mana.svg" alt="mana-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${manaColor}`}>{manaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/matic.svg" alt="matic-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${maticColor}`}>{maticChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/shib.svg" alt="shib-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${shibColor}`}>{shibChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/stx.svg" alt="stx-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${stxColor}`}>{stxChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/theta.svg" alt="theta-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${thetaColor}`}>{thetaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/crv.svg" alt="crv-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${crvColor}`}>{crvChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.rowWithItems4}>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/mana.svg" alt="mana-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${manaColor}`}>{manaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/matic.svg" alt="matic-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${maticColor}`}>{maticChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/shib.svg" alt="shib-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${shibColor}`}>{shibChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/stx.svg" alt="stx-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${stxColor}`}>{stxChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/theta.svg" alt="theta-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${thetaColor}`}>{thetaChange}%</p>
              </div>
            </div>
            <div className={styles.itemBox}>
              <div className={styles.imgWithChange}>
                <Image className={styles.coinImg} src="/coins1/crv.svg" alt="crv-icon" width={35} height={35} />
                <p className={`${styles.coinPriceChangeText} ${crvColor}`}>{crvChange}%</p>
              </div>
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