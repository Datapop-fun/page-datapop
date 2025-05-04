'use client'

import dynamic from 'next/dynamic'

// Este componente solo se carga en el cliente
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default Lottie
