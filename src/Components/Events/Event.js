import { React } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import EventImage from "./EventImage"

function Event() {
  const { event_id } = useParams()

  const { loading, error, data } = useQuery(FETCH_EVENT_BY_ID, {
    variables: { event_id },
  })

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return (
      <div>
        <h1>Error :(</h1>
        <div>
          <p>{JSON.stringify(error)}</p>
        </div>
      </div>
    )
  }

  const eventData = data.event
  console.log(eventData)

  return (
    <div>
      <div>{eventData.id}</div>
      <div>{eventData.title}</div>
      <div>
        Coords: {eventData.coordinates.lat}, {eventData.coordinates.lon}
      </div>
      <div>
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
          timeStyle: "short",
        }).format(new Date(eventData.date))}
      </div>
      <div>
        {eventData.sources &&
          eventData.sources.map((source) => {
            return (
              <div key={source.id}>
                <a href={source.url}>{source.id}</a>
              </div>
            )
          })}
      </div>
      <div>
        <EventImage
          lat={eventData.coordinates.lat}
          lon={eventData.coordinates.lon}
          date={eventData.date.substr(0, 10)}
          dim="0.25"
        />
      </div>
    </div>
  )
}

const FETCH_EVENT_BY_ID = gql`
  query GetEventById($event_id: String!) {
    event(id: $event_id) {
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

export default Event

/*
query MyQuery {
  events(end: "2021-04-22", limit: "5", start: "2021-01-01") {
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

query event {
  event(id: "EONET_5305") {
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

*/
