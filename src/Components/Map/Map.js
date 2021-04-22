import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Main, Sidebar } from "../Styled"
import LeafletMap from "./LeafletMap"
import moment from "moment"

const { NASA_API_KEY } = process.env

const Container = styled.div`
  width: 100%;
`

const Map = () => {
  const [events, setEvents] = useState(null)
  const [eventID, setEventID] = useState(null)
  const [limit, setLimit] = useState(70)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  useEffect(() => {
    async function fetchData() {
      const api_key = NASA_API_KEY
      const startFormat = moment(startDate).format("YYYY-MM-DD")
      const endFormat = moment(endDate).format("YYYY-MM-DD")

      const url =
        "https://eonet.sci.gsfc.nasa.gov/api/v3/events?api_key=" +
        api_key +
        "&limit=" +
        limit +
        "&start=" +
        startFormat +
        "&end=" +
        endFormat

      const response = await fetch(url)

      if (!response.ok) {
        console.log(response.error)
        return
      }

      const data = await response.json()
      setEvents(data.events)
    }
    fetchData()
  }, [limit, startDate, endDate])

  return (
    <Main className="Map-Landing">
      <Sidebar
        id={eventID}
        events={events}
        limit={limit}
        setLimit={setLimit}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <Container className="Map-Wrapper">
        <LeafletMap data={events} id={eventID} setEventID={setEventID} />
      </Container>
    </Main>
  )
}

export default Map
