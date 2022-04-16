const router = require('express').Router();
const Teacher = require('../models/Teacher');
const verify = require('../verifyToken');

/*
*@CREATE 
*/
router.post("/", async(req,res)=>{
    
        const newTeacher =new Teacher(req.body);
            try{
                const saveUser = await newTeacher.save();
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
                const updateTeacher = await Teacher.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                { new:true }
                );
                res.status(201).json(updateTeacher);
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@DELETE
*/
router.delete("/:id", async(req,res)=>{
            try{
                await Teacher.findByIdAndDelete(req.params.id);
                res.status(200).json("The Teacher has been deleted...");
            }catch(err){
                res.status(500).json(err);
            }
});

/*
*@Find Teacher
*/
router.get("find/:id", async(req,res)=>{
            try{
                const getTeacher =await Teacher.findById(
                    req.params.id
                );
                res.status(201).json(getTeacher);
            }catch(err){
                res.status(500).json(err);
            }

});

/*
*@Find Teacher
*/
router.get("/",  async(req,res)=>{
    try{
        const getTeacher =await Teacher.find();
        res.status(201).json(getTeacher);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router