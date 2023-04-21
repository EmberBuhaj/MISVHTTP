const http = require('http');
const fs = require('fs');

// HTTP =>(request, response)

http.createServer((request, response)=>{

    const file = request.url == '/'?'./WWW/index.html':`./WWW${request.url}`;

    //const data =  fs.readFileSync('./WWW/index.html');

    fs.readFile(file, (err, data)=>{
        if(err){
            response.WriteHead(404, {"Content-Type":"text/pain"});
            response.write("Not Found");
            response.end();
        }else {
            response.writeHead(200, {"content-Type":"text/html"});
            response.write(data);
            response.end();
        }
    });

    
}).listen(4444);


