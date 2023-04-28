const http = require('http');
const fs = require('fs');

// HTTP =>(request, response)

http.createServer((request, response)=>{

    const file = request.url == '/'?'./WWW/index.html':`./WWW${request.url}`;

    //const data =  fs.readFileSync('./WWW/index.html');

    if(request.url == '/login'){
        let data = [];
        request.on("data", value => {
            data.push(value);
        }).on("end", () => {
            let params = buffer.concat(data).toString();
            console.log(params);
            response.write(params);
            response.end();
        });
    }

    fs.readFile(file, (err, data)=>{
        if(err){
            response.WriteHead(404, {"Content-Type":"text/pain"});
            response.write("Not Found");
            response.end();
        }else {
            const extension = request.url.split('.').pop();
            console.log(extension);
            switch(extension){
                case 'txt':
                    response.writeHead(200, {"Content-Type":"text/plain"});
                    break;
                    case 'html':
                        response.writeHead(200, {"Content-Type":"text/html"});
                        break;
    
                    case 'css':
                        response.writeHead(200, {"Content-Type":"text/css"});
                        break;
                    
                    case 'ico':
                        response.writeHead(200, {"Content-Type":"image/x-icon"});
                        break;
    
                    case 'js':
                        response.writeHead(200, {"Content-Type":"text/javascript"});
                        break;
                    
                    case 'jpeg':
                        response.writeHead(200, {"Content-Type":"image/jpeg"});
                        break;
    
                    default:
                        response.writeHead(200, {"Content-Type":"text/html"});
                        break;    
            }
            response.write(data);
            response.end();
        }
    });

    
}).listen(4444);


