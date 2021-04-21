import { React, useEffect, useState } from "react"
import styled from "styled-components"

import Spinner from "../Spinner"
import { Main, Navbar, Footer } from "../Styled"

const Container = styled.div`
  width: 100%;
`

const Loader = styled.div`
  padding: 10% 50%;
`

function EventList() {
  /**
   * TODO: we get tons of errors `Connector: HTTP Error: Too Many Requests` using Apollo.
   *   `const { loading, error, data } = useQuery(FETCH_ALL_EVENTS)`
   *
   * Have to fetch the old way...
   */
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

/*
TODO: see above re: Too Many Requests

const FETCH_ALL_EVENTS = gql`
  query allEvents {
    events {
      date
      description
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
*/

export default EventList
