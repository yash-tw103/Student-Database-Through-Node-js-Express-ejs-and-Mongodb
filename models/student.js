const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : {
        type:String  , 
        required : true,
        trim: true
    },
    age:{
        type : Number,
        required : true,

    },
    fees: {
        type : Number ,
        required : true,
    }

});

module.exports = mongoose.model("Student", studentSchema);