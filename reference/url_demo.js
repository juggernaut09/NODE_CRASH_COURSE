const url = require('url')

const myUrl = new URL("http:/mywebsite.com/hello.html?id=5050&status=active")

//Serialized URl
console.log(myUrl.href);
console.log(myUrl.toString())

//Host (root domain)
console.log(myUrl.host)

//Hostname does not get the port
console.log(myUrl.hostname)

//Path name
console.log(myUrl.pathname)

//Serialized query
console.log(myUrl.search)

//Search Params
console.log(myUrl.searchParams)

//add search params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

//Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}=> ${value}`))