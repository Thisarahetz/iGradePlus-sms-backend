const router = require('express').Router();
const Student = require('../models/Student');

/*
*@CREATE 
*/
router.post("/", async(req,res)=>{
        const newStudent =new Student(req.body);
            try{
                const saveUser = await newStudent.save();
                res.status(200).json(saveUser);
            }catch(err){
                res.status(500).json(err);
            }
    
});
/*
*@UPDATE
*/
router.put("/:id", async(req,res)=>{
            try{
                const updateStudent = await Student.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                { new:true }
                );
                res.status(201).json(updateStudent);
            }catch(err){
                res.status(500).json(err);
            }
    

});

/*
*@DELETE
*/
router.delete("/:id", async(req,res)=>{
    
            try{
                await Student.findByIdAndDelete(req.params.id);
                    res.status(201).json("Delete Student!!");
            }catch(err){
                res.status(500).json(err);
            }
    

});

/*
*@Find Student
*/
router.get("/find/:id", async(req,res)=>{
            try{
                const getStudent =await Student.findById(
                    req.params.id
                );
                res.status(201).json(getStudent);
            }catch(err){
                res.status(500).json(err);
            }

});

/*
*@Find Student
*/
router.get("/",
 async(req,res)=>{
    try{
        const getStudent =await Student.find();
        res.status(201).json(getStudent);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router