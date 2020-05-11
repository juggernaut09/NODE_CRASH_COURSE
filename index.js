const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname,'/public','index.html'), (err, content) =>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-type': 'text/html'})
    //         res.end(content);
    //     })
    // }

    // if (req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'/public','about.html'), (err, content) =>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-type': 'text/html'})
    //         res.end(content);
    //     })
    // }



    // if (req.url === '/api/users') {
    //     const users = [{
    //         name : 'teja',
    //         age : 22
    //     },{
    //         name : 'teja',
    //         age : 22
    //     }];

    //     res.writeHead(200, {'Content-type': 'text/html'});
    //     res.end(JSON.stringify(users))

    // }

    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    //Extension of the file
    let extFile = path.extname(filePath);

    //initial content type
    // let contentType = 'text/html'


    //Check extname and set contentType
    switch (extFile) {
        case '.js' :
            contentType = 'text/javascript'
            break;
        case '.html' :
            contentType = 'text/html'
            break;
        case '.py':
            contentType = 'text/python'
            break;  
        case '.css' :
            contentType = 'text/css'
            break;
        case '.json' :
            contentType = "application/json"
            break;
        case '.png' :
            contentType = 'image/png'
            break;
        case '.jpg' : 
            contentType = 'image/jpg'
            break;
        
    }

    //ReadFile
    fs.readFile(filePath, (err , content) =>{
        if(err) {
            if (err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname,'/public','404.html'), (err, content) =>{
                    res.writeHead(404, {'Content-type': 'text/html'});
                    res.end(content, 'utf-8')
                })
            }
            else {
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        }
        else{

            res.writeHead(200,{contentType})
            res.end(content, 'utf-8')

        }
       
    })
    
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));





