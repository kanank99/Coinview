import React from 'react'
import styles from '../styles/searchBox.module.css'

function SearchBox() {
  return (
        <input type="text" className={styles.inputSearch} placeholder="eg. xrp" />
  )
}

export default SearchBox