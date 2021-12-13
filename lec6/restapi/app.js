const express=require("express")
const app=express()
const studentroute=require("./routes/api/student")
const facultyroute=require("./routes/api/faculty")
const Mongoose = require("Mongoose")




app.use("/student",studentroute)
app.use("/faculty",facultyroute)

Mongoose.connect("mongodb+srv://gaurav2:gaurav786@cluster0.b4muw.mongodb.net/test?retryWrites=true&w=majority")
Mongoose.connection.on("connected",connected=>{console.log("connected to database")})
Mongoose.connection.on("error",error=>{console.log("connection failed")})






app.use((req,res,next)=>{
    res.status(404).json({
        message:"bad request url"
    })
})

module.exports=app