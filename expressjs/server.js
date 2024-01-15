const express = require ('express')
const app = express()
app.set('view engine','ejs')
app.use(express.static("public"))
app.use(logger)

// app.get('/', (req,res)=>{
//     // res.send('Hi...')
//     res.render("index",)
// })
const userRouter = require('./routes/users')
app.use("./", userRouter)

function logger(req,res,next){
    console.log(req.originalUrl);
    next()
}










app.listen(4000)