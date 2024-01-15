const express = require ('express')
require("dotenv").config()
const multer = require('multer')
const mongoose = require ('mongoose')
const app = express()
const PORT =process.env.PORT || 3000;
const bcrypt = require('bcrypt')
const File = require('./models/File')

mongoose.connect(process.env.DATABASE_URL)

const upload = multer({dest: "uploads"} )

 app.set("view engine", "ejs");


 app.get("/", (req,res)=> {
    res.render('index')
  })
  app.post("/upload", upload.single("file"), async (req,res)=>{
     const fileData = {
      path: req.file.path, 
      originalName:req.file.originalname
     }
     if(req.body.password != null && req.body.password !=""){
      fileData.password = await bcrypt.hash(req.body.password, 10)
     }
     try{
      const file = await File.create(fileData)
      res.send(file.originalName)
     }catch(e){
      console.error(e)
res.send(e)
     }
    
  }) 
    
  app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`Server is listening on port ${PORT}`);
  });
  
