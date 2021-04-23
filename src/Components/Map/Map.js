import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from "styled-components"
import { Main, Sidebar, Spinner } from "../Styled"
import LeafletMap from "./LeafletMap"

const Container = styled.div`
  width: 100%;
`
const Loader = styled.div`
  padding: 10% 50%;
`

const Error = styled.div`
  padding: 10px 40px;
`

const Map = () => {
  const { limit, start, end } = useParams()

  const { loading, error, data } = useQuery(FETCH_EVENTS_DATE_RANGE, {
    variables: { limit, start, end },
  })

  const [eventID, setEventID] = useState(null)

  return (
    <Main className="Map-Landing">
      <Sidebar id={eventID} />
      <Container className="Map-Wrapper">
        {loading && (
          <Loader>
            <Spinner />
          </Loader>
        )}
        {error && (
          <Error>
            <h1>Error :(</h1>
            <div>
              <p>{JSON.stringify(error)}</p>
            </div>
          </Error>
        )}
        {!loading && !data && <Error>Error loading events data.</Error>}
        {!loading && data && (
          <LeafletMap data={data.events} id={eventID} setEventID={setEventID} />
        )}
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
    }
  }
`
