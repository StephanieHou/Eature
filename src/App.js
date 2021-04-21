import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Event from "./pages/Event"
import EventList from "./pages/EventList"
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/events" component={EventList} />

        <Switch>
          <Route path="/events/:event_id" children={<Event />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
