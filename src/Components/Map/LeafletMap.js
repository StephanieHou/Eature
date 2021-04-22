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

const LeafletMap = ({ data }) => {
  const url =
    "https://api.mapbox.com/styles/v1/" +
    REACT_APP_LEAFLET_USER +
    "/" +
    REACT_APP_LEAFLET_MAP_ID +
    "/tiles/256/{z}/{x}/{y}@2x?access_token=" +
    REACT_APP_LEAFLET_ACCESS_TOKEN
    
  return (
    <Main className="Leaflet-Map">
      <Container className="Map" id="Eature-Map">
        <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
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
                  {parseFloat(event.geometry[0].coordinates[0])}{" "}
                  {parseFloat(event.geometry[0].coordinates[1])}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </Container>
    </Main>
  )
}

export default LeafletMap
