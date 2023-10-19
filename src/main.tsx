import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.tsx'
import App from './App.tsx'
import { ThemeProvider } from "styled-components"
import { theme } from './styles/theme.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>,
)
