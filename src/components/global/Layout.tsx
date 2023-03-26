import React, { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { GlobalStyle } from './GlobalStyles'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <GlobalStyle />
      {children}
      <Footer />
    </>
  )
}
