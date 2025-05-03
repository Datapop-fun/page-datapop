'use client'

import styles from './CenteredLogo.module.css'

export default function CenteredLogo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img
          src="/Datapop-Logo.svg"
          alt="Datapop Logo"
          className={styles.logo}
        />
        <img
          src="/Banner-Text.svg"
          alt="Frase Datapop"
          className={styles.banner}
        />
      </div>
    </div>
  )
}
