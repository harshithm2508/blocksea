import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import { RecoilRoot } from 'recoil'
import ThemeProvider from './components/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </StrictMode>
)
