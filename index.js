

const http = require('http')
const fs = require ('fs')

const server = http.createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
let filename=+new Date()
fs.writeFile(`${filename}.txt`,`The time is ${new Date()}`,'utf-8',()=>{
fs.readFile(`${filename}.txt`,'utf-8',(err,data)=>{
if (err)
console.log(err)
else
res.end(data)
})
})

})

server.listen(7000,()=>console.log("Server is Listening"))