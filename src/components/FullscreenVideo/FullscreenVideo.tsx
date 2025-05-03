'use client'

import dynamic from 'next/dynamic'
import styles from './FullscreenVideo.module.css'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function FullscreenVideo() {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        url="https://res.cloudinary.com/delkm2xf2/video/upload/v1746218541/BG-Datapop-Hero_viuokg.mp4"
        playing
        loop
        controls={false}
        muted
        width="100%"
        height="auto"
        className={styles.player}
      />
    </div>
  )
}
