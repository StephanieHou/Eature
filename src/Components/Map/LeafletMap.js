import React from "react"
import styled from "styled-components"
import { Main } from "../Styled"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const {
  REACT_APP_LEAFLET_ACCESS_TOKEN,
  REACT_APP_LEAFLET_USER,
  REACT_APP_LEAFLET_MAP_ID,
} = process.env

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
`

const LeafletMap = ({ data, id, setEventID }) => {
  const url =
    "https://api.mapbox.com/styles/v1/" +
    "shou94" +
    "/" +
    "cknrxzbnx157017qo9oemv1uf"+
    "/tiles/256/{z}/{x}/{y}@2x?access_token=" +
    "pk.eyJ1Ijoic2hvdTk0IiwiYSI6ImNrbnJ4dDg3ZTBtdm0yd3BoYXUzNXNsOTEifQ.aAUh-Nc0vIQMbbtWQfg0DQ"

  return (
    <Main className="Leaflet-Map">
      <Container className="Map" id="Eature-Map">
        <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={url}
          />
          {data &&
            data.map((event, i) => (
              <Marker
                key={i}
                position={
                  parseFloat(event.geometry[0].coordinates[1])
                    ? [
                        parseFloat(event.geometry[0].coordinates[1]),
                        parseFloat(event.geometry[0].coordinates[0]),
                      ]
                    : [1.0, parseFloat(event.geometry[0].coordinates[0])]
                }
              >
                <Popup>
                  {event.title}
                  <br />
                  {"Lat:"}
                  {parseFloat(event.geometry[0].coordinates[0])}
                  <br />
                  {"Long:"}{parseFloat(event.geometry[0].coordinates[1])}
                  <br />  <br />
                  Type: {event.categories[0].title}
                  <br />
                  <a href={event.sources[0].url}>Source</a>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </Container>
    </Main>
  )
}

export default LeafletMap

/*
{"id":"EONET_5305",
"title":"Tropical Cyclone Jobo",
"description":null,
"link":"https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5305",
"closed":null,"categories":[{"id":"severeStorms","title":"Severe Storms"}],
"sources":[{"id":"JTWC","url":"https://www.metoc.navy.mil/jtwc/products/sh2921.tcw"}],
"geometry":[{"magnitudeValue":35,"magnitudeUnit":"kts","date":"2021-04-20T18:00:00Z","type":"Point","coordinates":[49.6,-10.2]},{"magnitudeValue":45,"magnitudeUnit":"kts","date":"2021-04-21T00:00:00Z","type":"Point","coordinates":[48.8,-10]}]}
*/
