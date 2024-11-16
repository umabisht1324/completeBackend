import dotenv from "dotenv"

import connectDB from "./db/dbIndex.js";

dotenv.config({
    path:'./env'
})

connectDB()

























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