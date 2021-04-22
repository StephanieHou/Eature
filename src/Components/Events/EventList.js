import { React, useQuery } from "react"
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
  const limit = 10
  const start = "2021-01-01"
  const end = "2021-04-22"
  console.log(limit, start, end)

  const { loading, error, data } = useQuery(FETCH_EVENTS_DATE_RANGE, {
    variables: { limit: "10", start: "2021-01-01", end: "2021-04-22" },
  })
  console.log(loading, error, data)
  const events = data.events

  return (
    <Main className="EventList">
      <Navbar />
      <Container className="EventList-Wrapper">
        {events && (
          <Loader>
            <Spinner />
          </Loader>
        )}
        <div>
          <ol>
            {events &&
              events.map((evt) => (
                <li key={evt.id}>
                  <a href={"/events/" + evt.id}>
                    {evt.title} |{" "}
                    {evt.geometry[0] &&
                      new Intl.DateTimeFormat("en-US", {
                        dateStyle: "long",
                        timeStyle: "short",
                      }).format(new Date(evt.geometry[0].date))}
                  </a>
                </li>
              ))}
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
