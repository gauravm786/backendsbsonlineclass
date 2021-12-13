const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const Student=require("../model/student")

router.get("/",(req,res,next)=>{
    Student.find()       //.find() will find all the data in database and will display on the postman
    .then(result=>{
    res.status(200).json({
        studentData:result
        // result
    })
    })

    // .then(result=>{         //this code will call mongodb data in the terminal
    // console.log(result)
    // res.status(200).json({
    //     studentData:Student
    // })
    // })

    .catch(err=>{
        console.log(err)
    res.status(500).json({
        error:err
    })    
    })
})

router.post("/",(req,res,next)=>{
   const student=new Student({       //to create new student or new user
    _id:new mongoose.Types.ObjectId, 
    name:req.body.name, //req.body.name means giving name of the student and user and assigning it to name key
    email:req.body.email,
    phone:req.body.phone,
    gender:req.body.gender
   })

   student.save()

   .then(result=>{console.log(result)
   res.status(200).json({
       newStudent:result
   })
   })  

   .catch(err=>{console.log(err)
   res.status(500).json({
    newStuden:error
   })
   })
   
})
module.exports=router