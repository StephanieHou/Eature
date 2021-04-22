# Eature

Visualize events recorded by NASA's Earth Observatory Natural Event Tracker (EONET)

- [NASA APIs](https://api.nasa.gov/)
- [EONET API Documentation](https://eonet.sci.gsfc.nasa.gov/docs/v3)
- [Example API data](https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_5300)

# StepZen

[StepZen](https://my.stepzen.com/)

Can't get past this error:

```
Deploying to StepZen...... !
(node:69868) UnhandledPromiseRejectionWarning: SyntaxError: Unexpected token A in JSON at position 0
    at JSON.parse (<anonymous>)
    at logError (/usr/local/lib/node_modules/stepzen/lib/start/deploy.js:47:34)
    at Object.exports.default [as deploy] (/usr/local/lib/node_modules/stepzen/lib/start/deploy.js:59:17)
(node:69868) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 17)
```

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

The issue is...

# Production Deployment

todo

# API Data Structures

## Example NASA EONET api results

[Super Typhoon Surigae](https://eonet.sci.gsfc.nasa.gov/api/v3/events/EONET_5300)

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

## Example graphql query

```graphql
{
  getEventById(id: "EONET_5300") {
    description
    id
    title
    coordinates {
      lat
      lon
    }
    date
    geoType
  }
}
```

## Super Typhoon Surigae

```json
{
  "data": {
    "coordinates": [
      {
        "lat": "137.7",
        "lon": "8.5"
      }
    ],
    "getEventById": {
      "coordinates": [
        {
          "lat": "137.7",
          "lon": "8.5"
        }
      ],
      "date": "2021-04-14T00:00:00Z",
      "description": null,
      "geoType": "Point",
      "id": "EONET_5300",
      "title": "Super Typhoon Surigae"
    }
  }
}
```

- https://api.nasa.gov/planetary/earth/imagery?lon=137.7&lat=8.5&date=2021-04-14&dim=0.5&api_key=DEMO_KEY
