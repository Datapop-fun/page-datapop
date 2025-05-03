'use client'

import Background from "@/components/Background/Background"
import CenteredLogo from "@/components/CenteredLogo/CenteredLogo"
import ConnectButton from "@/components/ConnectButton/ConnectButton"
import FullscreenVideo from "@/components/FullscreenVideo/FullscreenVideo"

export default function Home() {
  return (
    <>
      <Background />
      <div style={{ position: 'relative' }}>
        <FullscreenVideo />
        <CenteredLogo />
        <ConnectButton/>
      </div>
    </>
  )
}
