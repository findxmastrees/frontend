import React from 'react'
import { NavBar } from './components/common/NavBar'
import Router from './routes/Router'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <NavBar />
    </>
  )
}

export default App
