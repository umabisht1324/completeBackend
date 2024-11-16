import dotenv from "dotenv"
import {app} from "./app"
import connectDB from "./db/dbIndex.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console,log(`Server is running on PORT:${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error;
    })
        
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!!",err)
})

























/*
// function connectDB()
// {}
// connectDB()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error)
    {
        console.log("ERROR",error);
        throw error;
    }
})()
*/