const Student = require("../models/student");

class StudentController {

    static createDoc = async(req,res)=>{
        
        try {
            const doc = new Student({
                name : req.body.name,
                age : req.body.age,
                fees : req.body.fees
            });

            const result = await doc.save();
            // console.log(result);
            res.redirect("/student");
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc =async(req,res)=>{
        try {
            const result =await Student.findById(req.params.id);
            // console.log(result);
            res.render("edit" , {data: result});
        } catch (error) {
            console.log("error");
        }
    }

    static getAllDoc =async(req,res)=>{
    try{
        const result = await Student.find();
        // console.log(result);
        res.render("index",{data: result});
    }catch(err){
        console.log(err);
    }
}

    static updateDocById = async(req,res)=>{
        try {
            const result = await Student.findByIdAndUpdate(req.params.id , req.body);
            
        } catch (error) {
            console.log(error);
        }
        res.redirect("/student");
    }

    static deleteDocById =async(req,res)=>{

        try {
            const result = await Student.findByIdAndDelete(req.params.id);
            // console.log(result);
            res.redirect("/student");
            
        } catch (error) {
            
            console.log(error);
        }
    }
}

module.exports = StudentController;