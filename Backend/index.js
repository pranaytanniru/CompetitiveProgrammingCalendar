// var cron = require('node-cron');
// console.log('Started cron job',new Date());
// cron.schedule('*/5 * * * *', () => {
//   console.log('running a task every five minutes',new Date());
// });

const express = require('express');
// const keys= require('./config/keys')
const bodyParser = require('body-parser');
const app=express();


app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, PUT, POST, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials",true)
  next();
});



const userRoute = require('./routes/user.js');
const contestRoute = require('./routes/contests.js');
app.use('/',userRoute);
app.use('/',contestRoute);


const port =process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
