const router = require('express').Router();
const Conversation = require('../models/Conversation');

//new conversation
router.post("/",async (req,res)=>{
    const newConversation = new Conversation({
        member:[req.body.senderId,req.body.receiverId]
    });
    try {
        const conversations = await newConversation.save();
        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get conversation
router.get("/:userId",async (req,res)=>{
    try {
        const conversation = await Conversation.find({
            member:{$in:[req.params.userId]},
        });
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router;