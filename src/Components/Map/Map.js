import React from "react"
import styled from "styled-components"
import { Main, Sidebar } from "../Styled"
import LeafletMap from "./LeafletMap"

const Container = styled.div`
  width: 100%;
`

const Map = () => {
  return (
    <Main className="Map-Landing">
      <Sidebar />
      <Container className="Map-Wrapper">
        <LeafletMap />
      </Container>
    </Main>
  )
}

export default Map
