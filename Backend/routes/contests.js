const express = require('express');
const router = express.Router();
const xml2js = require ('xml2js');
const rp = require('request-promise');
function getPlatformFromLink(url){
  url=url.toLowerCase();
  platforms=['hackerrank','codechef','topcoder','codeforces']
  for(let i=0;i<platforms.length;i++){
    if(url.includes(platforms[i])){
      return platforms[i];
    }
  }
  return "other platform"
}
function getFeed(url,response){
  rp(url)
    .then(function(html){
      xml2js.parseString (html,(err,res)=>{
        let items=res.rss.channel[0].item
        items=items.map((a,i)=>{
          let item={}
          item.title=a.title[0]
          item.description=a.description[0]
          item.url=a.url[0]
          item.startTime=new Date(a.startTime[0])
          item.endTime=new Date(a.endTime[0])
          item.platform=getPlatformFromLink(item.url);
          return item;
        })
        response.send(items)

        // var payloadString=JSON.stringify(res);
      });
    })
    .catch(function(err){
      console.log("encountered error"+err);
    });
};

router.post('/contests', (request, response,next) => {
  // console.log(request.body);
  getFeed('https://www.hackerrank.com/calendar/feed.rss',response);
  // response.send("It\'s working");
});

module.exports = router;
