import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" //user ki cooies or crud operation
const app=express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

// data can be come from any format json,body etc

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
 

export {app}


// middleware
// /instagram
// res.send("uma") url aaya aur res snd krdiya
// but yeh bhi check krna hoga ki login ho ki nhi yhi 
// checkings ko hee checki krne  k liye middlewares use krte h