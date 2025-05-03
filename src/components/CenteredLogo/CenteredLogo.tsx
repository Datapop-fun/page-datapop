'use client'

import styles from './CenteredLogo.module.css'
import Image from "next/image";

export default function CenteredLogo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Image
          src="/Datapop-Logo.svg"
          width={0}
          height={0}
          alt="Datapop Logo"
          className={styles.logo}
        />
        <Image
          src="/Banner-Text.svg"
          width={0}
          height={0}
          alt="Frase Datapop"
          className={styles.banner}
        />
      </div>
    </div>
  )
}
