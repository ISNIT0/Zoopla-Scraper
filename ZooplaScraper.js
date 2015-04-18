var request = require('sync-request');
var cheerio = require('cheerio');

module.exports = {
  byLocation:function(location){
    var $ = cheerio.load(request('GET', "http://www.zoopla.co.uk/for-sale/property/"+location+"/?page_size=9999&pn=0").getBody());
    return $('.listing-results > li.clearfix').map(function(i, val){
      return {
        zooplaId:$(val).attr('data-listing-id'),
        agent:(($(val).find('.agent_logo img').attr('src')||'').match(/\(([^)]+)\)/)||['',''])[1],
        coordinates:{longitude:$(val).find('meta[itemprop=longitude]').attr('content'), latitude:$(val).find('meta[itemprop=latitude]').attr('content')},
        price:$(val).find('.listing-results-price').eq(0).text().trim(),
        dateListedZoopla:'',
        dateRemovedZoopla:'',
        floorPlan:'',
        address:$(val).find('.streetAddress').text().trim(),
        rank:[i],
        location: location
      };
    }).toArray();
  },
  detail:function(id){
    var $ = cheerio.load(request('GET', "http://www.zoopla.co.uk/for-sale/details/"+id).getBody());
    return {
      listingHeader:$('.listing-details-h1').text().trim(),
      beds:$('.num-icon.num-beds').text(),
      floorplan:$('.floorplan-img').attr('src'),
      agent:$('#listings-agent strong>a').eq(0).text(),
      agentLogo:$('.agent_logo').attr('src'),
      agentId:$('#listings-agent strong>a').eq(0).attr('href').split('-').slice(-1)[0] .split('/')[0],
      price:$('.listing-details-price.text-price').text().trim(),
      address:$('.listing-details-address h2').text().trim()
    }
  }
};
