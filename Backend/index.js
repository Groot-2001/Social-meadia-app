//packages or dependencies 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();

//mongodb configuration
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//multer configurations
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"public/images");
  },
  filename:(req,file,cb)=>{
    cb(null,req.body.name);
  }
}); 

//setting up with the storage engine
const upload = multer({storage});

//Middleware.
app.use(express.json());
app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(morgan("common"));
app.use("/images",express.static(path.join(__dirname,"public/images")));



//RESTful Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.post("/api/upload",upload.single("file"),(req,res)=>{
  try {
    return res.status(200).json("file upload successfully!!");
  } catch (err) {
    console.log(err);
  }
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});