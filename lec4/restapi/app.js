const express=require("express")
const app=express()
const studentroute=require("./router/api/student")
const facultyroute=require("./router/api/faculty")


app.use("/student",studentroute)
app.use("/faculty",facultyroute)

//status code 404 means error or not found
app.use((req,res,next)=>{
    res.status(404).json({
        message:"bad url request "
    })
})



module.exports=app