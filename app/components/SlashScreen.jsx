'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../page.module.css'

function SlashScreen({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => { setIsMounted(true) }, 10)
    finishLoading()
    return () => clearTimeout(timeout)
    }, [])
  return (
    <div isMounted={isMounted}>
        <div className={styles.logoItemBoxSplash}>
            <Image src="/coins/eye-logo.png" alt="eye-logo" width={50} height={50} />
            <div className={styles.lightShadowDivLogo}></div>
        </div>
    </div>
    
  )
}

export default SlashScreen