import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Event from "./Components/Event"
import EventList from "./Components/Events/EventList"
import Home from "./Components/Home/Home"
import Map from "./Components/Map/Map"
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/events" component={EventList} />

        <Switch>
          <Route path="/events/:event_id" children={<Event />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
