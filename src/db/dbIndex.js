import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    console.log("Connecting to MongoDB...");
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
          
        });
        console.log(`MONGO DB CONNECTED !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR:", error);
        process.exit(1); // terminate process
    }
};

export default connectDB;

