import React from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const { REACT_APP_GOOGLE_MAP_API_KEY } = process.env

const mapStyles = {
  height: "100vh",
  width: "100%",
}

const defaultCenter = {
  lat: 41.3851,
  lng: 2.1734,
}

const MapContainer = () => {
  return (
    <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  )
}

export default MapContainer
