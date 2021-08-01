const express = require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const User=require('../modals/userModal');
var otp;

//middleware used for exporting routes to main page
var authRouter = express.Router();


authRouter.get('/auth',(req, res)=>{
    res.send('GET request to the homepage');
  })

authRouter.post('/login',(req,res)=>{
  console.log(req.body);
res.send("422");
})

authRouter.post('/otp',(req,res)=>{
  otp=Math.floor(Math.random()*10000);
  const accountVIKAS = process.env.TWILIO_ACCOUNT_VIKAS;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountVIKAS, authToken)
client.messages
.create({
     body: 'This is your otp :'+otp,
     from: '+19099067067',
     to:   '+91'+req.body.phone
   })
  .then(message => console.log(message));
  res.status(200);
})

authRouter.post('/register',(req,res)=>{
  if(req.body.otp==otp){
    bcrypt.hash(req.body.password, 2, (err, hash) => {
      let obj=new User ({
        phone:req.body.phone,
        password:hash
      })
      obj.save(console.log);
      res.status(200);
    });
  }
})

  module.exports=authRouter;