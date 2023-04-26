import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"


import logoImage from '../assets/logo-ignite-shop.svg'
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <Container>
      <Header>
        <img src={logoImage.src} alt="" />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  )
}

