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

  return visible ? (
    <a
      href="https://docs.google.com/forms/d/1NQckB71uwqESpom6HejgyFW7yUO4h5LXTXqAX7LFLTw/edit"
      className={styles.wrapper}
      aria-label="Ir a formulario de contacto"
      target="_blank"
      rel="noopener noreferrer"
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
