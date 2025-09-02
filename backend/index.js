import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database is connected")
}).catch((err) => {
    console.log(err)
})

const app = express()

app.listen(5000, ()=>{
    console.log("server is running on port 5000!");
})