import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from "styled-components"
import { Main, Sidebar } from "../Styled"
import LeafletMap from "./LeafletMap"
import Spinner from "../Events/Spinner"

const { NASA_API_KEY } = process.env

const Container = styled.div`
  width: 100%;
`
const Loader = styled.div`
  padding: 10% 50%;
`

const Map = () => {
  const { limit, start, end } = useParams()
  const { loading, error, data } = useQuery(FETCH_EVENTS_DATE_RANGE, {
    variables: { limit, start, end },
  })
  console.log(loading, error, data)

  const [eventID, setEventID] = useState(null)

  return (
    <Main className="Map-Landing">
      <Sidebar id={eventID} />
      {loading && (
        <Loader>
          <Spinner />
        </Loader>
      )}
      {error && (
        <div>
          <h1>Error :(</h1>
          <div>
            <p>{JSON.stringify(error)}</p>
          </div>
        </div>
      )}
      <Container className="Map-Wrapper">
        <LeafletMap data={data.events} id={eventID} setEventID={setEventID} />
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
