'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../page.module.css'
import { motion } from 'framer-motion'

function SlashScreen({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => { setIsMounted(true) }, 10)
    finishLoading()
    return () => clearTimeout(timeout)
    }, [])
  return (
    <div>
        <div className={styles.logoItemBoxSplash}>
            <Image src="/coins/eye-logo.png" alt="eye-logo" width={50} height={50} priority />
            <div className={styles.lightShadowDivLogo}></div>
        </div>
    </div>
    
  )
}

export default SlashScreen