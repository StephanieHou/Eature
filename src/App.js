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

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={Map}>
          <Redirect to="/map/10/2021-01-01/2021-04-22" />
        </Route>
        <Switch>
          <Route path="/map/:limit/:start/:end" component={Map} />
        </Switch>

        <Route exact path="/events" component={EventList}>
          <Redirect to="/events/10/2021-01-01/2021-04-22" />
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
