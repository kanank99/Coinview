'use client'

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from '../styles/searchBox.module.css'



function SearchBox() {
    const router = useRouter()
    const inputRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          router.push(`/coinPage/${inputRef.current.value}`)
        }
      };

  return (
        <input ref={inputRef} type="text" className={styles.inputSearch} placeholder="eg. xrp" onKeyDown={handleKeyDown}/>
  )
}

export default SearchBox