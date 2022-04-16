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


module.exports = router