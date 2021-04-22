import { React } from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import { useParams } from "react-router-dom"
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
      <div>Category: {eventData.category[0].title}</div>
      <div>
        Coords: {eventData.coordinates[0].lat}, {eventData.coordinates[0].lon}
      </div>
      <div>
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
          timeStyle: "short",
        }).format(new Date(eventData.date))}
      </div>
      <div>
        {eventData.category.id === "severeStorms" && "Wind speed:"}{" "}
        {eventData.magnitudeValue} {eventData.magnitudeUnit}
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
          lat={eventData.coordinates[0].lat}
          lon={eventData.coordinates[0].lon}
          date={eventData.date.substr(0, 10)}
          dim="0.2"
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

*/
