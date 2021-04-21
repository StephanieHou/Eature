import { React } from "react"
import { useQuery, gql } from "@apollo/client"

function EventList() {
  const { loading, error, data } = useQuery(FETCH_ALL_EVENTS)

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

  const eventData = data
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
    </div>
  )
}

const FETCH_ALL_EVENTS = gql`
  query allEvents {
    events {
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
