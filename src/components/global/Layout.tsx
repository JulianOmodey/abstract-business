import React from 'react'
import { FCWithChildren } from '../../types'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: FCWithChildren = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
