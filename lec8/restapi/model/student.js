const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId, //this will generate unique id for every student or user
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    gender:{type:String,required:true}
})

module.exports=mongoose.model("student",studentSchema)