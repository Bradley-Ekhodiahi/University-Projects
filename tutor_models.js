const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema
({
    id: {type:String,required:true},
    title: {type:String,required:true},
    first_name: {type:String,required:true},
    surname: {type:String,required:true},
    phone_no: {type:String,required:true},
    email: {type:String,required:true},
    address: {
       line1: {type:String,required:true},
       line2: {type:String,required:false},
       town: {type:String,required:true},
       county: {type:String,required:true},
       eircode: {type:String,required:false}
    }
})

const Tutor = mongoose.model('Tutor',tutorSchema);

module.exports = Tutor;