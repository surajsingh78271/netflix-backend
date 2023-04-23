
const express = require('express');
const cors = require('cors')
const netflixRoute = require('./webRoute/netflixRoute.js');
const connectDb = require('./db/userLogindb')
const dotenv  = require('dotenv')


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connectDb(process.env.DATABASE_URL4);
const port = process.env.PORT || 5000;

app.use("/form",netflixRoute);
app.use("/form",(req,res)=>{
   res.send("hello");
})


// if( process.env.NODE_ENV === "production" ){

//     app.use(express.static("frontend/build"));
// }

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
})