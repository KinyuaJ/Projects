    const express = require('express')
    const app = express()
    const bcrypt = require('bcrypt')
    const users = []
    const fs=require('fs')

    fs.writeFileSync('text.txt',`Hey you....how's everything`);

      fs.readFile('text.txt','utf8', (err, data)=>{
          console.log(data)
      })
    app.set('views-engine', 'ejs')
    app.use(express.urlencoded({extended:false}))

 app.get('/', (req,res)=>{
     res.render('index.ejs')
 })
    app.get('/login', (req, res)=>{
        res.render('login.ejs')
    })
    app.get('/register', (req,res)=>{
        res.render('register.ejs')
    })
    app.post('/register', async (req,res)=>{
try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    res.redirect('/login')
}catch {
    res.redirect('/register')
    }
    })



    const PORT = process.env.port || 2500
     app.listen(PORT, ()=>{
         console.log(`App started at port ${PORT}`)
     })
