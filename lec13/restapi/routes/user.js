const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const User=require("../model/user")
const bcrypt=require("bcrypt")

router.get("/",(req,res,next)=>{
    res.status(200).json({
        message:"user route working"
    })
})

router.post("/signup",(req,res,next)=>{                 //this is signup api and therefore its endpoint should be /signup
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }
        else{
            const user=new User({
                _id: new mongoose.Types.ObjectId,
                username:req.body.username,
                password:hash,
                phone:req.body.phone,
                email:req.body.email,
                userType:req.body.userType
            })
            user.save()
        
            .then(result=>{
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })
        }
    })

})

module.exports=router

// npm install bcrypt for signup Api 
// bpm converts plaintext/password into secure hashcode 


//1st way
// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });


//2nd way
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });