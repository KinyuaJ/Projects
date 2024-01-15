const fs = require ('fs')
const path = require ('path')

// // //make folder
// fs.mkdir(path.join(__dirname, '/test'),{}, err =>{
//     if(err) throw err;
//     console.log('fplder created......');
// })

// //create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'I Love node', err =>{
//     if(err) throw err;
//     console.log('file written to......');
// })

// //read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8', (err,data) =>{
//     if(err) throw error;
//     console.log(data);
// })


//rename a file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'), 
    err =>{
    if(err) throw error;
    console.log('file renamed......');
})
