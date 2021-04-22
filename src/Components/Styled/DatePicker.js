import DatePicker from "react-datepicker"
import { useState, useEffect } from "react"

const Datepicker = (props) => {
  const [startDate, setStartDate] = useState(new Date())

  useEffect(() => {
    props.setDate(startDate)
  }, [startDate])

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={(newDate) => setStartDate(newDate)}
    />
  )
}

export default Datepicker
