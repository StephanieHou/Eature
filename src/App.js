import React from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import Event from "./Components/Events/Event"
import EventList from "./Components/Events/EventList"
import Home from "./Components/Home/Home"
import Map from "./Components/Map/Map"
import "./App.css"
import formatDateForApi from "./util/dates"

function App() {
  let dt = new Date()
  dt.setMonth(dt.getMonth() - 1)
  const lastMonth = formatDateForApi(dt)
  const today = formatDateForApi(new Date())
  const defaultLimit = 10

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/map">
          <Redirect to={`/map/${defaultLimit}/${lastMonth}/${today}`} />
        </Route>
        <Switch>
          <Route path="/map/:limit/:start/:end" component={Map} />
        </Switch>

        <Route exact path="/events">
          <Redirect to={`/events/${defaultLimit}/${lastMonth}/${today}`} />
        </Route>
        <Switch>
          <Route path="/events/:limit/:start/:end" component={EventList} />
        </Switch>

        <Switch>
          <Route path="/events/:event_id" children={<Event />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
