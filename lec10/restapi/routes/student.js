const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const Student=require("../model/student")

router.get("/",(req,res,next)=>{
    Student.find() //.find() will find all the data in database and will display on the postman

    .then(result=>{
    res.status(200).json({
        studentData:result
        // result
    })
    })

    .catch(err=>{
        console.log(err)
    res.status(500).json({
        error:err
    })    
    })
})

router.get("/:id",(req,res,next)=>{
    console.log(req.params.id)  //params.id will show  only single data out of multiple data with the help of id and here data will be shown in terminal
    Student.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            student:result
    })
    })

    .catch(error=>{console.log(error)
    res.status(500).json({
        newStudent:error
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
    newStudent:error
   })
   })
   
})
module.exports=router

//Note:
//params property is an object containing properties mapped to the named route “parameters”.
//  For example, if you have the route /student/:id, then the “id” property is available as req.params.id. 
// This object defaults to {}.