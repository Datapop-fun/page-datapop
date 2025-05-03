'use client'

import { useEffect, useState } from 'react'
import styles from './FloatingLogo.module.css'
import Image from "next/image";

export default function FloatingLogo() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.logoWrapper} ${visible ? styles.visible : ''}`}>
      <Image
        src="/Menu-Logo.svg"
        alt="Logo"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        width={48}
        height={48}
      />
    </div>
  )
}
