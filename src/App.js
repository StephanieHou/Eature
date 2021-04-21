import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Map from "./Components/Map/Map"
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={Map} />
      </div>
    </Router>
  )
}

export default App
