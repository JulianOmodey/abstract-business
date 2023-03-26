import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import theme from './src/theme'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <HelmetProvider>
      <ScThemeProvider theme={theme}>{element}</ScThemeProvider>
    </HelmetProvider>
  )
}
