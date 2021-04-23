## PredictHQ

### Event

[`https://api.predicthq.com/v1/events?id=ggbSwtZW8EP2CmLJBm&limit=1`]

```json
{
  "count": 1,
  "overflow": false,
  "next": null,
  "previous": null,
  "results": [
    {
      "relevance": 1.0,
      "id": "ggbSwtZW8EP2CmLJBm",
      "title": "Earthquake Magnitude 4.7 - 122 km SE of Kokopo, Papua New Guinea",
      "description": "",
      "category": "disasters",
      "labels": ["disaster", "earthquake"],
      "rank": 77,
      "local_rank": null,
      "aviation_rank": null,
      "phq_attendance": null,
      "entities": [],
      "duration": 0,
      "start": "2021-01-02T16:36:34Z",
      "end": "2021-01-02T16:36:34Z",
      "updated": "2021-01-02T17:16:22Z",
      "first_seen": "2021-01-02T17:15:21Z",
      "timezone": "Pacific/Port_Moresby",
      "location": [153.0172, -5.1569],
      "country": "",
      "place_hierarchies": [],
      "state": "active",
      "brand_safe": true,
      "private": false
    }
  ]
}
```

### Events

`https://api.predicthq.com/v1/events?category=disasters&limit=3&start.gte=2021-01-01&start.tz=UTC&start.lte=2021-01-02`

```json
{
  "count": 25,
  "overflow": false,
  "next": "https://api.predicthq.com/v1/events/?category=disasters&limit=3&offset=3&start.gte=2021-01-01&start.lte=2021-01-02&start.tz=UTC",
  "previous": null,
  "results": [
    {
      "relevance": 1.0,
      "id": "ggbSwtZW8EP2CmLJBm",
      "title": "Earthquake Magnitude 4.7 - 122 km SE of Kokopo, Papua New Guinea",
      "description": "",
      "category": "disasters",
      "labels": ["disaster", "earthquake"],
      "rank": 77,
      "local_rank": null,
      "aviation_rank": null,
      "phq_attendance": null,
      "entities": [],
      "duration": 0,
      "start": "2021-01-02T16:36:34Z",
      "end": "2021-01-02T16:36:34Z",
      "updated": "2021-01-02T17:16:22Z",
      "first_seen": "2021-01-02T17:15:21Z",
      "timezone": "Pacific/Port_Moresby",
      "location": [153.0172, -5.1569],
      "country": "",
      "place_hierarchies": [],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 1.0,
      "id": "mKwvSy9GTLCKsnHzTs",
      "title": "Earthquake Magnitude 4.6 - 17 km NNE of Soledad, California",
      "description": "",
      "category": "disasters",
      "labels": ["disaster", "earthquake"],
      "rank": 84,
      "local_rank": null,
      "aviation_rank": null,
      "phq_attendance": null,
      "entities": [],
      "duration": 0,
      "start": "2021-01-02T14:42:24Z",
      "end": "2021-01-02T14:42:24Z",
      "updated": "2021-01-02T14:46:40Z",
      "first_seen": "2021-01-02T14:45:22Z",
      "timezone": "America/Los_Angeles",
      "location": [-121.2619, 36.5771],
      "country": "",
      "place_hierarchies": [],
      "state": "active",
      "brand_safe": true,
      "private": false
    },
    {
      "relevance": 1.0,
      "id": "mNNktDV4fcFA3i3Myg",
      "title": "Earthquake Magnitude 4.6 - 110 km SSW of Luwuk, Indonesia",
      "description": "",
      "category": "disasters",
      "labels": ["disaster", "earthquake"],
      "rank": 84,
      "local_rank": null,
      "aviation_rank": null,
      "phq_attendance": null,
      "entities": [],
      "duration": 0,
      "start": "2021-01-02T13:59:26Z",
      "end": "2021-01-02T13:59:26Z",
      "updated": "2021-01-03T05:22:19Z",
      "first_seen": "2021-01-03T05:20:25Z",
      "timezone": "Asia/Makassar",
      "location": [122.5472, -1.9216],
      "country": "",
      "place_hierarchies": [],
      "state": "active",
      "brand_safe": true,
      "private": false
    }
  ]
}
```
