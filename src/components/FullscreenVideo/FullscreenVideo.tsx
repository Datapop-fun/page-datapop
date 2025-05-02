'use client'

import dynamic from 'next/dynamic'
import styles from './FullscreenVideo.module.css'

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false })

export default function FullscreenVideo() {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=B4LvDiIi128"
        playing
        loop
        controls={false}
        muted
        width="100%"
        height="100%"
        className={styles.player}
      />
    </div>
  )
}
