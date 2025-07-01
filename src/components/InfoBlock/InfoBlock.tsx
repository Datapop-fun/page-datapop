'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './InfoBlock.module.css'

export default function InfoBlock() {
  const blockRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
    tl.fromTo(
      blockRef.current,
      {
        scaleX: 0,
        scaleY: 0,
        opacity: 0.7,
        backgroundColor: 'rgba(255,255,255,0.88)',
        borderColor: 'rgba(255,255,255,0.82)',
        transformOrigin: 'left bottom'
      },
      {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        backgroundColor: 'rgba(37,81,245,0.53)',
        borderColor: '#fff', 
        duration: 1.6,
        delay: 1.2,
      }
    )
    .to(
      blockRef.current,
      {
        borderColor: '#fff', 
        boxShadow: '0 0 22px 2px #fff9, 0 4px 48px 0 rgba(18,24,52,0.14)',
        duration: 0.45,
        ease: 'power1.in'
      },
      "+=0.06"
    )
    .to(
      blockRef.current,
      {
        borderColor: 'rgba(255,255,255,0.82)', 
        boxShadow: '0 4px 48px 0 rgba(18,24,52,0.14)',
        duration: 0.77,
        ease: 'power1.out'
      },
      "+=0.21"
    )
    .fromTo(
      textRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.45 },
      "-=0.24"
    )
  }, [])

  return (
    <div className={styles.fixedWrapper}>
      <div className={styles.block} ref={blockRef}>
        <div className={styles.textBlock} ref={textRef}>
          <p className={styles.paragraph}>
          transforma los datos empresariales en atractivas historias visuales que fomentan la conexión emocional y la comprensión. Combinando arte y diseño centrado en el ser humano, convertimos información compleja en experiencias intuitivas e interactivas que ayudan a los equipos a ver, sentir y actuar sobre lo que realmente importa.
          </p>
        </div>
      </div>
    </div>
  )
}
