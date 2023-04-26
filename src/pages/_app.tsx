import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { Container, Header } from "../styles/pages/app"

import Image from 'next/image'

import logoImage from '../assets/logo-ignite-shop.svg'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <Container>
      <Header>
        <Image src={logoImage} alt="" />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  )
}

