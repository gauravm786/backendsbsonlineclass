//now use nodemon and it is used to avoid running everytime and app will run automatically we dont need to type node appname.js
//to install nodemon type "npm install -save nodemon" inside terminal and now we type nodemon appname.js to run the filr

const express=require("express")

const app=express()

app.use((req,res,next)=>{
    res.status(200).json({
        // message : "app is running"
        message : "app is running on localhost"
    })
})
module.exports=app

