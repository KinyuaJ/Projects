const path = require('path')
//basename = path_demo.js
 console.log(path.basename(__filename))
 //directory name
 console.log(path.dirname(__filename))
 //extension = js
 console.log(path.extname(__filename));
 //create path object =root,dir,base,axt,name
 console.log(path.parse(__filename));
 //concatenate paths
 console.log(path.join(__dirname, 'test','hello.html'));
