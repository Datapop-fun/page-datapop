'use client'

import { useEffect, useState } from 'react'
import styles from './ConnectButton.module.css'
import animationData from '../../assets/lottie/data.json'
import Lottie from './LottieNoSSR'

export default function ConnectButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'connect_button_click', {
        event_category: 'engagement',
        event_label: 'Connect Form',
        value: 1,
      })
    }
  }

  return visible ? (
    <a
      href="/form"
      className={styles.wrapper}
      aria-label="Ir a formulario de contacto"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className={styles.lottie}
      />
    </a>
  ) : null
}
