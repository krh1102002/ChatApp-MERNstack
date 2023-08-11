const express=require('express')
const dotenv=require('dotenv');
const { default: mongoose } = require('mongoose');
const userRoutes=require('./Routers/userRoutes');

const app=express();
dotenv.config();

const connectdb=async()=>{
   try {
    const connect=mongoose.connect(process.env.MONGO_URI);
    console.log("successfully connected to the db");
   } catch (err) {
    console.log("not connected to db",err.message);
   }
}
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Api is working")
});
app.use("/user",userRoutes);


// getting the port no from the .env file
const port=process.env.PORT || 5000

// nodemon is useful for reloding the server automatically we don't need to restart the server many more times
app.listen(port,console.log("server is running...."))

connectdb();
// this command is userful for downloadiing the package globally
// npm i -g
// .env== enviornment 
// postman is use for testing the request 