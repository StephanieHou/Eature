# Eature

Visualize events recorded by NASA's Earth Observatory Natural Event Tracker (EONET)

- [NASA APIs](https://api.nasa.gov/)
- [EONET API Documentation](https://eonet.sci.gsfc.nasa.gov/docs/v3)
- [Example API data](https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_5300)
- [Events from PredictHQ API](https://docs.predicthq.com/api/requests/)

# StepZen

We are using [StepZen](https://my.stepzen.com/) to unify multiple REST APIs into a single GraphQL interface for our app to query.

# Dev Setup

`npm install -g stepzen`

# Dev Commands

### `yarn start`

Starts React frontend

### `stepzen start`

Launches local stepzen graphiql explorer and backend data sources

# Dev Tips

If NASA imagery api gives you:

```json
{ "msg": "No imagery for specified date.", "service_version": "v5000" }
```

for [URL](https://api.nasa.gov/planetary/earth/imagery?lon=-101.05&lat=-74.95&date=2017-09-23&dim=0.2&api_key=DEMO_KEY)

```
https://api.nasa.gov/planetary/earth/imagery?lon=-101.05&lat=-74.95&date=2017-09-23&dim=0.2&api_key=DEMO_KEY
```

The issue is... maybe try dim=0.5 ?

## TypeError: Object(...) is not a function

Make sure you're importing `useQuery` from "@apollo/client"! Or, you're importing a hook from the wrong module!

## StepZen's graphiql UI won't load in browser

Make sure your `config.yaml` file is there.

# Production Deployment

Netlify works.

Make sure you add your `.env` variables to the environment in their web UI.

# API Data Structures

## Example NASA EONET api results

[Super Typhoon Surigae](https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5300)

Notice that the `geometry` array is a time series.

```json
{
  "id": "EONET_5300",
  "title": "Super Typhoon Surigae",
  "description": null,
  "link": "https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5300",
  "closed": null,
  "categories": [
    {
      "id": "severeStorms",
      "title": "Severe Storms"
    }
  ],
  "sources": [
    {
      "id": "GDACS",
      "url": "https://www.gdacs.org/Cyclones/report.aspx?eventid=1000778&amp;eventtype=TC"
    },
    {
      "id": "JTWC",
      "url": "https://www.metoc.navy.mil/jtwc/products/wp0221.tcw"
    }
  ],
  "geometry": [
    {
      "magnitudeValue": 35.0,
      "magnitudeUnit": "kts",
      "date": "2021-04-14T00:00:00Z",
      "type": "Point",
      "coordinates": [137.7, 8.5]
    },

    {
      "magnitudeValue": 35.0,
      "magnitudeUnit": "kts",
      "date": "2021-04-14T06:00:00Z",
      "type": "Point",
      "coordinates": [137.4, 8.9]
    },

     ...<more geometries>
```

## Example URLs for Before & During satellite images given a date, lat, lon

- https://api.nasa.gov/planetary/earth/imagery?lon=137.7&lat=8.5&date=2021-03-01&dim=0.5&api_key=DEMO_KEY
- https://api.nasa.gov/planetary/earth/imagery?lon=137.7&lat=8.5&date=2021-04-14&dim=0.5&api_key=DEMO_KEY

- https://api.nasa.gov/planetary/earth/imagery?lon=137.7&lat=8.5&date=2021-04-14&dim=0.5&api_key=DEMO_KEY
