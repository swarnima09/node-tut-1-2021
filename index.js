// const http = require('http');

// //create a server object:
// http.createServer(function (req, resp) {
//     resp.writeHead(200,{'Content-Type' :'application\json'});
//     resp.write(JSON.stringify({name:"swarnima",email:"ff"}))
//     resp.end(); //end the response
// }).listen(8080);

//function to create multiple file in a loop

const fs        =   require('fs');
const path      =   require('path');
const dirPath   =   path.join(__dirname,'files')

console.log(dirPath)