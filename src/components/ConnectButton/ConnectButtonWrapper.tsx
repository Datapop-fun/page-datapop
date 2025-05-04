'use client'

import dynamic from 'next/dynamic'

// Carga tu componente real sin SSR
const ConnectButton = dynamic(() => import('./ConnectButton'), { ssr: false })

export default ConnectButton
