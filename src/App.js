import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Event from "./pages/Event"
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/event" component={Event} />
      </div>
    </Router>
  )
}

export default App
