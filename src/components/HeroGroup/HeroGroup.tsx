'use client'
import styles from './HeroGroup.module.css'
import CenteredLogo from "../CenteredLogo/CenteredLogo"
import ConnectButton from "../ConnectButton/ConnectButton"
import InfoBlock from "../InfoBlock/InfoBlock"

export default function HeroGroup() {
  return (
    <div className={styles.heroGroupContainer}>
        <CenteredLogo />
        <InfoBlock />
        <ConnectButton />
    </div>
  ) }