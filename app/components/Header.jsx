import React from 'react'
import styles from '../page.module.css'
import SearchBox from './SearchBox'
import Link from 'next/link'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <Link href="/">
              <h3 className={styles.logoTitle}>Coinview</h3>
            </Link>
            <SearchBox />
        </div>
        <div className={styles.headerBorder}></div>
    </header>
  )
}

export default Header