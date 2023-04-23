
const mongoose = require('mongoose')


const connectDb = async (DATABASE_URL) => {
    try {
       return await  mongoose.connect(DATABASE_URL,{
        dbName: "netflix-clone",
        strictQuery:false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
         serverApi: "ServerApiVersion.v1",
        useFindAndModify: false
       }).then(()=>{
    console.log("connected successfully mongodb")


    
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://surajsingh78271:<password>@cluster0.lc49e7d.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });










})
       

    } catch (error) {
        console.log(error);
    }
   
}


module.exports = connectDb;