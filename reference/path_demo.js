const path = require('path')

//base name
console.log(path.basename(__filename))

//dir name
console.log(path.dirname(__filename))

//extension name
console.log(path.extname(__filename))

//Create Path object
console.log(path.parse(__filename))

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))