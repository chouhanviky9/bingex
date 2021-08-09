var express = require('express');

//middleware used for exporting routes to main page
var router = express.Router()


router.get('/',(req, res)=>{
    res.send('GET request to the homepage ~vikas');
  })

  module.exports=router;