```graphql
query MyQuery {
  getEventById(id: "EONET_5303") {
    description
    id
    title
    coordinates {
      coord
      date
      type
    }
  }
}
```

```json
{
      "id": "EONET_5293",
      "title": "Wildfire - NW of Chico, California - United States",
      "description": "",
      "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_5293",
      "categories": [
          {
              "id": 8,
              "title": "Wildfires"
          }
      ],
      "sources": [
          {
              "id": "PDC",
              "url": "http://emops.pdc.org/emops/?hazard_id=123223"
          }
      ],
      "geometries": [
          {
              "date": "2021-04-09T22:29:00Z",
              "type": "Point",
              "coordinates": [
                  -121.977265662,
                  39.857563414
              ]
          }
      ]
  },
```

https://api.nasa.gov/planetary/earth/imagery?lon=-121.977265662&lat=39.857563414&date=2021-03-29&dim=0.25&api_key=DEMO_KEY
https://api.nasa.gov/planetary/earth/imagery?lon=-121.977265662&lat=39.857563414&date=2021-04-09&dim=0.25&api_key=DEMO_KEY
https://api.nasa.gov/planetary/earth/imagery?lon=-121.977265662&lat=39.857563414&date=2021-04-19&dim=0.25&api_key=DEMO_KEY

https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_5300
https://api.nasa.gov/planetary/earth/imagery?lon=137.7&lat=8.5&date=2021-03-14&dim=0.5&api_key=DEMO_KEY

Super Typhoon Surigae:

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
}```

https://api.nasa.gov/planetary/earth/imagery?lon=137.7&lat=8.5&date=2021-04-14&dim=0.5&api_key=DEMO_KEY
