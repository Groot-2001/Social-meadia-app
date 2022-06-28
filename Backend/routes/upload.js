const router = require("express").Router();

router.post("/",(req,res)=>{
    try {
      return res.status(200).json("file upload successfully!!");
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;