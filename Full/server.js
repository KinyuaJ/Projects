// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT ;
const mongoose = require('mongoose')

const indexRouter = require('./routes/index') 

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser:true
// })
// const db = mongoose.connection
// db.on('error', error =>console.error(error))
// db.once('open', ()=>
//     console.log('Connected to mongoose')
// )


app.use('/', indexRouter)





















app.listen(PORT,()=>{
    console.log(`Server started at Port ${PORT}`);
})