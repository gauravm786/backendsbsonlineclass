const express=require("express")

const studentroute=require("./api/routes/student")
const facultyroute=require("./api/routes/faculty")
const app=express()

app.use("/student",studentroute) //use this above otherwise it will not work
app.use("/faculty",facultyroute)

app.use((req,res,next)=>{
    res.status(200).json({
        message:"app is running"
    })
})



module.exports =app