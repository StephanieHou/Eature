import React, { useQuery, useParams } from "react"
import gql from "graphql-tag"
import styled from "styled-components"
import { Main, Sidebar } from "../Styled"
import LeafletMap from "./LeafletMap"

const { NASA_API_KEY } = process.env

const Container = styled.div`
  width: 100%;
`

const Map = () => {
  const [events, setEvents] = useState(null)
  const [eventID, setEventID] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const api_key = NASA_API_KEY

      // TODO use a UI widget for these values:
      const limit = 25
      const start = "2020-01-01"
      const end = "2021-04-22"

      // You can await here
      const response = await fetch(
        `https://eonet.sci.gsfc.nasa.gov/api/v3/events?api_key=${api_key}&limit=${limit}&start=${start}&end=${end}`
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
      <Sidebar id={eventID} />
      <Container className="Map-Wrapper">
        <LeafletMap data={events} id={eventID} setEventID={setEventID} />
      </Container>
    </Main>
  )
}

export default Map

const FETCH_EVENTS_DATE_RANGE = gql`
  query($limit: String!, $start: String!, $end: String!) {
    events(limit: $limit, start: $start, end: $end) {
      date
      description
      id
      title
      coordinates {
        lat
        lon
      }
      category {
        id
        title
      }
      magnitudeUnit
      magnitudeValue
      coordinateType
      sources {
        id
        url
      }
    }
  }
`
