const { response } = require('express')
const express= require('express')
const mysql = require('mysql')


//create connection
const db =mysql.createConnection({
    host:     'localhost',
    user:     'root',
    password: 'hfjdkvbn',
    //database: 'nodemysql'
})

//connect
db.connect((error)=>{
    if (error) {throw  new error('Db failed to connect..')}
    console.log('Mysql connected..');
})

const app = express();
//create db
app.get('/createdb', (req,res)=>{
        createDatabase(db)
        
})
//create table
app.get('/createpoststable', (req, res)=>{
   response.write( createpoststable(db))
})

const PORT = process.env.PORT || 2000
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})