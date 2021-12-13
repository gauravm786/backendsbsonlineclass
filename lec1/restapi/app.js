// const express =require("express") //use express and assiged it to express variable or we add express 
// const app=express()               and now assign express() to app variable

// app.use((req,res,next)=>{      //.use() is the inbuilt function of express.js
//     res.status(200).json({     //status(200) means "ok" and if everything is ok then return data in json format
//         message:'app is running' //json has message property to write any content in it
//     })
// })
// module.exports = app //export app to server.js file


//clean code or practice

const express=require("express")

const app=express()

app.use((req,res,next)=>{
    res.status(200).json({
        message:"app is running"
    })
})

module.exports=app



