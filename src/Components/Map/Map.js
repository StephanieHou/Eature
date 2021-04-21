import React from "react"
import styled from "styled-components"
import { Main, Navbar, Footer } from "../Styled"

const Container = styled.div`
  width: 100%;
`

const Map = () => {
  return (
    <Main className="Map-Landing">
      <Navbar />
      <Container className="Map-Wrapper"></Container>
      <Footer />
    </Main>
  )
}

export default Map
