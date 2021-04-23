import DatePicker from "react-datepicker"
import { useState, useEffect } from "react"

const Datepicker = (props) => {

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={props.date}
      onChange={(newDate) => props.setDate(newDate)}
    />
  )
}

export default Datepicker
