# NPM-Zoopla-Scraper
Zoopla Scraper


2 Methods:
* byLocation( string Location e.g. 'SW10'||'London' ) - Lists first 9999 properties within location provided (SW10)
* detail( string Zoopla Id e.g. '36577895' ) - Provides details for provided zoopla property

```javascript
var Zoopla = require('zoopla-scraper')

Zoopla.byLocation('HP13');
/*
[{ zooplaId: '31381970',
    agent: '151736',
    coordinates: { longitude: '-0.759262', latitude: '51.63422' },
    price: '£100,000',
    dateListedZoopla: '',
    dateRemovedZoopla: '',
    floorPlan: '',
    address: '',
    rank: [ 135 ],
    location: 'HP13' }, ... ]
*/

Zoopla.detail('36577895');
/*
{ listingHeader: '1 bed flat for sale',
  beds: '1',
  floorplan: 'http://lc.zoocdn.com/facdf0aa720a0926e04139e84b6b2536351f9005.png',
  agent: 'Foxtons - Earls Court',
  agentLogo: 'http://st.zoocdn.com/zoopla_static_agent_logo_(161658).png',
  agentId: '63098',
  price: '£350,000',
  address: 'Gunter Grove, Chelsea SW10' }
*/
```
