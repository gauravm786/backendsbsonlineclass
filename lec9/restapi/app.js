const express=require("express")
const app = express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const studentroute=require("./routes/student")
const facultyroute=require("./routes/faculty")

mongoose.connect("mongodb+srv://gaurav2:gaurav786@cluster0.b4muw.mongodb.net/test?retryWrites=true&w=majority")
mongoose.connection.on("connected",connected=>{console.log("connected to database")})
mongoose.connection.on("error",error=>{console.log("connection failed")})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/student",studentroute)
app.use("/faculty",facultyroute)


app.use((req,res,next)=>{
    res.status(404).json({
        message:"bad url request"
    })
})

module.exports=app