import { React } from "react"
import { useQuery, gql } from "@apollo/client"
import moment from "moment" // TODO:

function Event() {
  const { loading, error, data } = useQuery(FETCH_EVENT_BY_ID)

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error :(</div>
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
      <div>{moment(eventData.date).format("MMMM Do YYYY h:mm a")}</div>
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

const FETCH_EVENT_BY_ID = gql`
  query GetEventById {
    event(id: "EONET_5300") {
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
