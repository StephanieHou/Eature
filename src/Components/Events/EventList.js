import { React } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from "styled-components"
import { Main, Navbar, Footer } from "../Styled"
import Spinner from "./Spinner"

const Container = styled.div`
  width: 100%;
`

const Loader = styled.div`
  padding: 10% 50%;
`

function EventList() {
  const { limit, start, end } = useParams()
  console.log(limit, start, end)

  const { loading, error, data } = useQuery(FETCH_EVENTS_DATE_RANGE, {
    variables: { limit, start, end },
    errorPolicy: "all",
  })
  console.log(loading, error, data)

  return (
    <Main className="EventList">
      <Navbar />
      <Container className="EventList-Wrapper">
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
        {!loading && !data.events && (
          <div>No events found for that date range.</div>
        )}
        <div>
          <ol>
            {/* {data &&
              data.events &&
              data.events.length > 0 &&
              data.events.map((evt, i) => (
                <li key={i}>
                  <a href={"/events/" + evt.id}>
                    {evt.title} |{" "}
                    {evt.geometry[0] &&
                      new Intl.DateTimeFormat("en-US", {
                        dateStyle: "long",
                        timeStyle: "short",
                      }).format(new Date(evt.geometry[0].date))}
                  </a>
                </li>
              ))} */}
          </ol>
        </div>
      </Container>
      <Footer />
    </Main>
  )
}

const FETCH_EVENTS_DATE_RANGE = gql`
  query fetchSomeEvents($limit: String!, $start: String!, $end: String!) {
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

export default EventList
