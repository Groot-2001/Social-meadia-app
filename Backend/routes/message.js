const router = require('express').Router();
const Message = require('../models/Message');

//create message
router.post("/",async (req,res)=>{
    const newmessage = new Message(req.body);
    try {
        const savedmessage = await newmessage.save();
        res.status(200).json(savedmessage);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get messages
router.get("/:conversationId",async (req,res)=>{
    try {
        const getmessage = await Message.find({conversationId:req.params.conversationId});
        res.status(200).json(getmessage);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;