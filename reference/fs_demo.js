const fs = require('fs');
const path = require('path');

//Create a new folder
// fs.mkdir(path.join(__dirname,'/test'),{}, err =>{
//     if(err) throw err;
//     console.log(`Folder is created`)
// })


// Create a file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'), "Hello world", err => {
//     if(err) throw err;
//     console.log('The file is created');
//     //appendFile in callback function
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),"I love Nodejs", err =>{
//         if(err) throw err;
//         console.log("The file is appended") 
//     })
// })

//Read file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8', (err,data) =>{
//     if(err) throw err;
//     console.log(data);
// });

//File renamed
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'), err =>{
    if(err) throw err;
    console.log("file renamed")
})