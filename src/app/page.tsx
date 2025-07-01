'use client'

import Background from "@/components/Background/Background"
import CenteredLogo from "@/components/CenteredLogo/CenteredLogo"
import ConnectButton from "@/components/ConnectButton/ConnectButton"
import FloatingLogo from "@/components/FloatingLogo/FloatingLogo"
import FullscreenVideo from "@/components/FullscreenVideo/FullscreenVideo"
import InfoBlock from "@/components/InfoBlock/InfoBlock"


export default function Home() {
  return (
    <>
      <Background />
      <div style={{ position: 'relative' }}>
        <FullscreenVideo />
        <CenteredLogo />
        <ConnectButton/>
        <FloatingLogo/>
        <InfoBlock />
      </div>
    </>
  )
}
