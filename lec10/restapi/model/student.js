const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId, //this will generate unique id for every student or user
    name:String,
    email:String,
    phone:Number,
    gender:String
})

module.exports=mongoose.model("student",studentSchema)