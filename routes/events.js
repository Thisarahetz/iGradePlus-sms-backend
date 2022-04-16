const router = require('express').Router();
const Event = require('../models/Event');
const verify = require('../verifyToken');

/*
*@CREATE 
*/
router.post("/",async(req,res)=>{
    
        const newEvents =new Event(req.body);
            try{
                const saveUser = await newEvents.save();
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
         const updateEvents = await Event.findByIdAndUpdate(
             req.params.id,
             {
                 $set:req.body,
             },
             { new:true }
         );
        res.status(201).json(updateEvents);
    }catch(err){
        res.status(500).json(err);
    }

});
/*
*@DELETE
*/
router.delete("/:id",async(req,res)=>{
    
    try{
          await Event.findByIdAndDelete(req.params.id);
         
            res.status(201).json("Delete Events!!");
         
         //res.status(201).json("Event is not found");
    }catch(err){
        res.status(500).json(err);
    }


});