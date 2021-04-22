import React, { useQuery, useParams } from "react"
import gql from "graphql-tag"
import styled from "styled-components"
import { Main, Sidebar } from "../Styled"
import LeafletMap from "./LeafletMap"

const Container = styled.div`
  width: 100%;
`

const Map = () => {
  // let { limit, start, end } = {
  const limit = "10"
  const start = "2021-01-01"
  const end = "2021-04-21"
  // let limit = 10 limit || ""
  // let start = start || ""
  // let end = end || ""
  const { loading, error, data } = useQuery(FETCH_EVENTS_DATE_RANGE, {
    variables: { limit, start, end },
  })
  console.log(loading, error, data)
  const events = data.events

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
