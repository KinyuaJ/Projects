const express = require ('express')
const moment=require('moment')
const path = require('path')
const nodemailer = require('nodemailer')
// const members = require('./Members')

const app = express()
const date = new Date()
const formated=moment(date).format('dddd DD/MMM/YYYY')

// const logger = (req, res, next)=>{
//     console.log('Hello');
//     next();
// }

// app.get('/api/members', (req, res)=>{
//     res.json(members)

//     //get single member
//     app.get('./api/members')
// })
//set static folder


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kinyuanjaujohn@gmail.com',
      pass: 'Njash@192.168.2'
    }
  });
  
  var mailOptions = {
    from: 'kinyuanjaujohn@gmail.com',
    to: 'joenjash4064@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

app.use(express.static(path.join(__dirname, 'public')))
 
    const PORT = process.env.NODE_PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is up at ${formated}`)
})



