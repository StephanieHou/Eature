import styled from "styled-components"
import formatDateForApi from "../../util/dates"

const { NASA_API_KEY } = process.env

const Container = styled.div`
  display: inline-block;
`

const EventImage = ({ lat, lon, date }) => {
  const apiKey = NASA_API_KEY || "DEMO_KEY"
  const apiDate = formatDateForApi(date)
  const imageUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${apiDate}&dim=0.5&api_key=${apiKey}`

  return (
    <Container>
      <img src={imageUrl} alt="img" />
    </Container>
  )
}

export default EventImage
