import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </HelmetProvider>
  )
}
