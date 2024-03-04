const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema
({
    id: {type:String,required:true},
    tutorial_date: {type:String,required:true},
    tutorial_time: {type:String,required:true},
    students: {type:String,required:true},
    tutor: {type:String,required:true},
    fee: {type:String,required:true},
    tutorial_no:{type:String,required:true},
    attendance: {type:String,required:true},
    tutorial_subject: {type:String,required:true},
    tutorial_notes: {type:String,required:true},
    
})

const Tutorial = mongoose.model('Tutorial',tutorialSchema);

module.exports = Tutorial;