import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { CyclesProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesProvider>
          <Router />
        </CyclesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
