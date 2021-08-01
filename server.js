const express=require('express');
const dotenv=require('dotenv');
var bodyParser = require('body-parser');
const mongoose=require('mongoose');
const cron=require('node-cron');
const router=require('./routes/commen');
const authRouter = require('./routes/Auth');
const user=require('./modals/userModal');
const TrustedComms = require('twilio/lib/rest/preview/TrustedComms');
const cors=require('cors');
const bcrypt =require('bcrypt');

const app=express();
app.use(cors({origin:'*'}));
//middleware parseer
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//misc variables
dotenv.config({ path: '.env' });

//database
mongoose.connect('mongodb+srv://m220student:m220password@cluster0.eke9l.mongodb.net/bingeX?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true  })
.then(console.log("database connected"))
.catch((err)=>console.log(err));
// const obj=new user({
//     name:"admin",
//     phone:1111111111111,
//     email:"1111111@gmail.com",
//     profile_pic:null,
//     password:"123456n8",
//     currentBtx:0
// })


// bcrypt.hash("9928652733", 2, (err, hash) => {
//     console.log(hash)
//   });

//  bcrypt.compare("9928652733", "$2b$04$aHyK0LeA6jKjpb.ASNIvg.ohQ5fGBB.6iqmnrDoWnGi/iBaJJCyf.", function(err, res) {
// if(res == true){console.log("true")}
// });


// cron.schedule(' * * * * *', () => {
//   console.log('running a task every minute');
// });


app.use('/',router);
app.use('/auth',authRouter);


app.listen(process.env.PORT,()=>{
    console.log("app is listening at "+process.env.PORT);
})