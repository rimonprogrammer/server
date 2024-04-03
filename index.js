const { MongoClient, ServerApiVersion } = require('mongodb');
const UserRoute = require('./Routes/UserRoutes');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); 
require('dotenv').config();  
const app = express();             
app.use(cors());       
app.use(express.json());     
app.use('/api/auth', UserRoute);         

// ------ mongoose connection starting ------
const uri = process.env.MONGODB_URI;                   
mongoose.connect(uri, { 
    useNewUrlParser : true,  
    useUnifiedTopology : true 
}).then(()=>{
    console.log("Mongoose connected successfully!");
}).catch(()=>{
    console.log("No connection with mongoose");
});
 
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});            
            
app.get('/', (req, res) =>{
    res.send('Hello world!!!'); 
});

const Load = async() => { 
    try {
      await client.connect();
  
      const db = await client.db("test");
  
    } finally { 

    }
  } 
  Load();


app.listen(process.env.PORT || 5040, () =>{
    console.log("The server is running!!")
});