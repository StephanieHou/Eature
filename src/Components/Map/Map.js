import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Main, Sidebar } from "../Styled"
import LeafletMap from "./LeafletMap"

const Container = styled.div`
  width: 100%;
`

const Map = () => {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v3/events"
      )

      if (!response.ok) {
        console.log(response.error)
        return
      }

      const data = await response.json()
      setEvents(data.events)
    }
    fetchData()
  }, [])

  return (
    <Main className="Map-Landing">
      <Sidebar />
      <Container className="Map-Wrapper">
        <LeafletMap data={events} />
      </Container>
    </Main>
  )
}

export default Map
