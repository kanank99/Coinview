import React from 'react'
import styles from './page.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <p>dropdown</p>
            <h3 className={styles.logoTitle}>Coinview</h3>
            <p>Search</p>
        </div>
    </header>
  )
}

export default Header