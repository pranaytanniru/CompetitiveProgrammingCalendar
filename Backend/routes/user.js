const express = require('express');
const router = express.Router();


router.post('/user', (request, response,next) => {
  // console.log(request.body);
  response.send("It\'s working");
});

module.exports = router;
