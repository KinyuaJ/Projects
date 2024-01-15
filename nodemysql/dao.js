 const createDatabase=(db)=>{
    let sql = 'CREATE DATABASE nodemysql';
        db.query(sql,(err, result)=>{
            if (err) {throw err };
            console.log(result);
            res.send('Database created....')

        })
}

 const createpoststable=(db)=>{
    let sql = 'CREATE TABLE poster(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255),PRIMARY KEY (id))'
    db.query(sql,(err, result)=>{
        if (err) throw err;
        console.log(result);
        return result
    })
}
 

module.exports={
    createDatabase,createpoststable
}
