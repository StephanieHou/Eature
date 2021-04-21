import React from "react"
import styled from "styled-components"
import { Main } from "../Styled"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
`

const LeafletMap = () => {
  return (
    <Main className="Leaflet-Map">
      <Container className="Map" id="Eature-Map">
        <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/shou94/cknrxzbnx157017qo9oemv1uf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2hvdTk0IiwiYSI6ImNrbnJ4dDg3ZTBtdm0yd3BoYXUzNXNsOTEifQ.aAUh-Nc0vIQMbbtWQfg0DQ"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Container>
    </Main>
  )
}

export default LeafletMap
