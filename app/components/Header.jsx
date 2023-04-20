import React from 'react'
import styles from '../page.module.css'
import SearchBox from './SearchBox'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <p>dropdown</p>
            <h3 className={styles.logoTitle}>Coinview</h3>
            <SearchBox />
        </div>
        <div className={styles.headerBorder}></div>
    </header>
  )
}

export default Header