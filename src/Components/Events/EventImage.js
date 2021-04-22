const { NASA_API_KEY } = process.env

const EventImage = ({ lat, lon, date, dim }) => {
  const apiKey = NASA_API_KEY || "DEMO_KEY"
  const imageUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}&api_key=${apiKey}`

  return (
    <div>
      <img src={imageUrl} alt="img" />
    </div>
  )
}

export default EventImage
