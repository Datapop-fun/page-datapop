'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './FullscreenVideo.module.css'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function FullscreenVideo() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const videoUrl = isMobile
    ? 'https://res.cloudinary.com/delkm2xf2/video/upload/v1746307072/Bg-heroVertical_h6aizz.mp4'
    : 'https://res.cloudinary.com/delkm2xf2/video/upload/v1746218541/BG-Datapop-Hero_viuokg.mp4'

  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        url={videoUrl}
        playing
        loop
        controls={false}
        muted
        width="100%"
        height="100%"
        className={`${styles.player} ${isMobile ? styles.mobile : ''}`}
      />
    </div>
  )
}
