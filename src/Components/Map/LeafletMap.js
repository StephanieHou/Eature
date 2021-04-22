import React from "react"
import styled from "styled-components"
import { Main } from "../Styled"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
`

const LeafletMap = ({ data }) => {
  const test = 51.505
  return (
    <Main className="Leaflet-Map">
      <Container className="Map" id="Eature-Map">
        <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/shou94/cknrxzbnx157017qo9oemv1uf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2hvdTk0IiwiYSI6ImNrbnJ4dDg3ZTBtdm0yd3BoYXUzNXNsOTEifQ.aAUh-Nc0vIQMbbtWQfg0DQ"
          />
          {data &&
            data.map((event, i) => (
              <Marker
                key={i}
                position={parseFloat(event.geometry[0].coordinates[1])?[
                  parseFloat(event.geometry[0].coordinates[1]),
                  parseFloat(event.geometry[0].coordinates[0])
                ]: [
                    1.0,
                    parseFloat(event.geometry[0].coordinates[0])
                  ]}
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
