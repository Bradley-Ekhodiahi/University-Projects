const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema
({
    id: {type:String,required:true},
    title: {type:String,required:true},
    first_name: {type:String,required:true},
    surname: {type:String,required:true},
    birthdate:{type:String,required:true},
    gender: {type:String,required:true},
    phone_no: {type:String,required:true},
    email: {type:String,required:true},
    address: 
    {
       line1: {type:String,required:true},
       line2: {type:String,required:false},
       town: {type:String,required:true},
       county: {type:String,required:true},
       eircode: {type:String,required:false}
    },
    parental_permission:{type:String,required:true},
    subject:{type:String,required:false},
    parent_name:{type:String,required:true}
})

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;