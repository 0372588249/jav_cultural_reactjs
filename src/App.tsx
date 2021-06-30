import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import styled from 'styled-components'
import './App.css'
import GlobalStyles from './global-styles'

const Container = styled.div`
  width: 100%;
`

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Nav />
      </Container>
      <GlobalStyles />
    </React.Fragment>
  )
}

export default App
