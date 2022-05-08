const router = require('express').Router();
const Staff = require('../models/staff');
const verify = require('../verifyToken');

/*
*@CREATE 
*/
router.post("/", async(req,res)=>{
        const newStaff =new Staff(req.body);
            try{
                const saveUser = await newStaff.save();
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
        const updateStaff = await Staff.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
        { new:true }
        );
        res.status(201).json(updateStaff);
    }catch(err){
        res.status(500).json(err);
    }

});

/*
*@DELETE
*/
router.delete("/:id", async(req,res)=>{
    try{
        await Staff.findByIdAndDelete(req.params.id);
         res.status(201).json("Delete Staff!!");
        // res.status(201).json("Staff is not found");
    }catch(err){
        res.status(500).json(err);
    }

});

/*
*@Find Staff
*/
router.get("/find/:id", async(req,res)=>{
    try{
        const getStaff =await Staff.findById(
            req.params.id
        );
        res.status(201).json(getStaff);
    }catch(err){
        res.status(500).json(err);
    }

});

/*
*@Find All Staff
*/
router.get("/", async(req,res)=>{
    try{
        const getStaff =await Staff.find();
        res.status(201).json(getStaff);
    }catch(err){
        res.status(500).json(err);
    }

});

//GET staff add month 
router.get("/month", async (req, res) => {
    const today = new Date();
    today.setFullYear(today.setFullYear() - 1);
    try {
    const data = await Staff.aggregate([
        {
        $project: {
              //$month
            month: { $month: "$createdAt" },
        },
        },
        {
        $group: {
            _id: "$month",
            total: { $sum: 1 },
        },
        },
    ]);
    res.status(200).json(data)
    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router