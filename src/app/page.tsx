'use client'

import Background from "@/components/Background/Background"
import CenteredLogo from "@/components/CenteredLogo/CenteredLogo"
import FloatingLogo from "@/components/FloatingLogo/FloatingLogo"
import FullscreenVideo from "@/components/FullscreenVideo/FullscreenVideo"

export default function Home() {
  return (
    <>
      <Background />
      <div style={{ position: 'relative' }}>
        <FullscreenVideo />
        <CenteredLogo />
        <FloatingLogo/>
      </div>
    </>
  )
}
